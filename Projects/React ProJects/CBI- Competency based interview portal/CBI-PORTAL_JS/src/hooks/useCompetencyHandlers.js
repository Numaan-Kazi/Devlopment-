import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/config/axios";
import { toast } from "sonner";

export function useCompetencyHandlers({
  Form,
  quessionnaireData,
  QuestionerId,
  refetch,
}) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [probCount, setProbCount] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);
  const [openPop, setOpenPop] = useState(false);
  const [isTrueFlag, setIsTrueFlag] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [loader, setLoader] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (payload) => axios.post("/cbi", payload),
    onSuccess: async (res) => {
      const response = res?.data?.data;
      setApiResponse(response);

      if (response?.is_prop_ques_available === true) {
        setIsTrueFlag(true);
        setProbCount((p) => p + 1);
        await refetch();
      }
    },
  });

  function onSubmit(data) {
    const converstion_of_prop_question = (
      quessionnaireData?.prop_ques_resp ?? []
    )
      .map((item, index) => [
        { role: "assistant", id: item?.id || "" },
        { role: "user", text: data[`answer_${index}`] || "" },
      ])
      .flat();

    const payload = {
      conversation: [
        {
          role: "assistant",
          id: quessionnaireData?.id,
          text: quessionnaireData?.questions?.question,
        },
        { role: "user", text: data?.answer },
        ...converstion_of_prop_question,
      ],
      competency_name: quessionnaireData?.competency?.competency,
      remaining_time: 96,
      probe_count: probCount,
      expected_behaviors:
        quessionnaireData?.competency?.expected_behaviours?.map(
          (i) => i?.expected_behaviour,
        ),
      questionnaire_id: QuestionerId?.partiAssessments?.quessionnaire_id,
      participant_id: user?.participant_id,
    };

    mutate(payload);
  }

  const { mutate: pauseMutate } = useMutation({
    mutationFn: () =>
      axios.put(
        `/cbi/${QuestionerId?.partiAssessments?.quessionnaire_id}/${user?.participant_id}`,
      ),
    onSuccess(response) {
      toast.success(response?.data?.message || "Paused");
      setOpenPop(true);
    },
  });

  function PausedHandle() {
    Form.reset();
    setApiResponse(null);
    setProbCount(0);
    setIsTrueFlag(false);
    setOpenPop(false);
    refetch();
  }


  function LogoutHandle() {
    localStorage.clear();
    setLoader(true);
    setCompleted(false);

    setTimeout(() => {
      toast.error("Logged out successfully");
      navigate("/login");
    }, 1000);
  }

  useEffect(() => {
    if (apiResponse?.total_question_count) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCompleted(true);
    }
  }, [apiResponse]);

  return {
    onSubmit,
    PausedHandle,
    LogoutHandle,
    pauseMutate,
    isPending,
    apiResponse,
    openPop,
    setOpenPop,
    isTrueFlag,
    completed,
    loader,
  };
}
