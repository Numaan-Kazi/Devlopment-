# CSS Cheat Sheet
**CSS** stands for Cascading Style Sheets.

**CSS contains** – selector and declaration block. A declaration block consists of property-value pairs.  Example, 

#box

Here, 'box' is the selector and the declaration block is the entire thing inside the curly braces. Saved as - .css file


# 1. Font

| Property | Values | Example |
| --- | --- | --- |
| font-style | normal/italic/inherit/oblique | font-style: normal |
| font-variant | normal/inherit/small-caps | font-variant: small-caps |
| font-weight |	normal/bold/bolder/lighter/100-900/inherit | font-weight:bold |
| font-size	 | ?px/?%/small/medium/large | font-size: large font-size :5 |
| font-family |	verdana/calibri.. etc…	| font-family: verdana |


# 2. Text

| Property | Values | Example |
| --- | --- | --- |
| text-align | left/right/center/justify |	text-align: justify; |
| letter spacing |	normal/length/?%	| letter spacing : 3%; |
| Text-outline |	None/length/color	| Text-outline: red |
| word-wrap |	normal/length	| word-wrap: normal; |
| direction	| ltr/rtl/inherit |	Direction: ltr; |
| text-wrap |	normal/unrestricted/none | text-wrap: normal |
| text-indent |	?%/?px | text-indent: 2% |
| word-spacing | normal/?%/?px | word-spacing: normal |
| text-transform	| none/uppercase/lowercase/capitalize |	text-transform: lowercase |
| text-emphasis	| none/dot/open/filled/circle/triangle | text-emphasis: filled |
| text-justify | auto/distribute/inter-word |	text-justify:distribute |


# 3. User Interface

| Property | Values | Example |
| --- | --- | --- |
| appearance – apply platform specific styling |	normal / inherit / [icon / window / desktop / work-space / document / tooltip / dialog / button / push-button / hyperlink / radio-button / checkbox / menu-item / tab / menu / menubar / pull-down-menu / pop-up-menu / list-menu / radio-group / checkbox-group / outline-tree / range / field / combo-box / signature / password]	| appearance: password; |
| cursor | auto / crosshair / default / pointer / move / e-resize / neresize / nw-resize / n-resize / se-resize / sw-resize / swresize / s-resize / w-resize / text / wait / help |	.help { cursor: help; } |
| nav-index - specifies the sequential navigation order of current element. Similar to tab index in html. Values can be auto or a positive number representing the navigation order. First value is 1. |	auto / inherit  number | nav-index: 1; |
| nav-up | auto / inherit <id> [current / root / <target-name> auto (browser decides where to navigate to)/ id (specific ID to be navigated to)/ target_name (target frame to navigate to)/inherit (value computed based on element’s parent; root or current)| nav-up: auto; |
| nav-down | auto / inherit <id> [current / root / <target-name> | nav-down: #b2; |
| nav-left | auto / inherit <id> [current / root / <target-name> | nav-left: #b1; |
| nav-right |	auto / inherit <id> [current / root / <target-name>	| nav-right: #b2; |
| resize | none / both / horizontal / vertical / inherit | resize: horizontal; |
| icon | auto / inherit | url	icon: url(“like.png”); |


# 4. Backgrounds

| Property | Values | Example |
| --- | --- | --- |
| background-size |	auto/cover/?px/?%	| background-size: cover |
| background-image |	url/none |	background-image: none |
| background-repeat |	no-repeat/repeat-x/repeat-y/repeat |	background-repeat: repeat |
| background-attachment |	fixed/scroll | background-attachment: fixed |
| background-color | color/transparent | background-color: white |
| background-position | can be any position from different combinations like top left, top right, top center. Same with bottom. can be mentioned in terms of position x-% and y-%	| background-position: top-left; |
| background-origin |	the starting point of the background | background-origin: 0; |
| background-clip - lets you control how much of the background image should extend beyond the element’s content or padding | content-box/padding-box/border-box/no-clip/?%/?px | background-clip: no-clip |


# 5. Borders

| Property | Values | Example |
| --- | --- | --- |
| border-width | thin/thick/medium/?px | border-width: medium border-width: 20px |
| border-style | none/dashed/dotted/inset/double/solid | border-style : dotted |
| border-color | name of the color | border-color: black |
| border-left: border-left-color border-left-width |	| border-left-color: black border-left-width : 10px |
| border-right: border-right-color border-right-width	| |	border-right-color : black border-right-width : 15px |
| border-top: border-top-width border-top-color	| |	border-top-width : 10px border-top-color : blue |
| border-bottom: border-bottom-color border-bottom-width | |	border-bottom-color : black border-bottom-width : 15px |
| border-decoration-break | maintain consistent design amongst fragments of broken element slice/clone | border-decoration-break: slice; |
| border-radius border-top-right-radius  border-bottom-right-radius  border-bottom-left-radius  border-top-left-radius | ?px | border-top-left-radius : 20px |
| border-image| ?%/stretch/repeat/round/none | border-image : repeat border-image : 12px |

# 6. Box Model  

| Property | Values | Example |
| --- | --- | --- |
| float |	left / right / none |	float : right |
| height | auto length % | height : 10px |
| max-height | none length % | max-height : 10px |
| max-width |	none length %	| max-width : 120% | 
| min-height |	none length %	| min-height : 50% |
| min-width |	auto % length |	min-width : 30px |


## 6.1. Margin 

| Property | Values | Example |
| --- | --- | --- |
| margin-bottom |	auto/length %	| margin-bottom : 20px |
| margin-left	| auto/height % |	margin-left : auto |
| margin-right | auto/height % | margin-right : 30% |
| margin-top | auto/length %	| margin-top : 40mm |

## 6.1. Padding 

| Property | Values | Example |
| --- | --- | --- |
| padding-bottom | length %	| padding-bottom : 20px
| padding-top	| length %	| padding-top : 20px
| padding-right	| length %	| padding-right : 20px
| padding-left | length %	| padding-left : 20px
| display | none/inline/block/inline-block/list-item/run-in/compact/table/inline-table/table-row-group/table-headergroup/table-footer-group/table-row/table-column-group/table-column/table-cell/table-caption/ruby/ruby-base/ruby-text/ruby-base-group/ruby-text-group | display : inline |
| marquee-direction | forward/reverse |	marquee-direction : forward |
| marquee-loop | infinite/integer | marquee-loop : 10 |
| marquee-play-count | infinite/integer | marquee-play-count : 50 |
| marquee-speed |	slow/normal/fast | marquee-speed : slow |
| marquee-style	| scroll/slide/alternate | marquee-style : scroll |
| overflow | visible/hidden/scroll/auto/no-display/no-content/overflow-x/overflow-y | overflow : visible |
| overflow-style | auto/marquee-line/marquee-block | overflow-style : auto |
| overflow-x | visible/hidden/scroll/auto/no-display/no-content |	overflow-x : scroll |
| rotation | angle | rotation : 20deg |
| rotation-point | position (paired value off-set) | rotation-point : 50% 50% |
| visibility | visible/hidden/collapse | visibility: hidden |
| clear |	left/right/both/none |	clear: left |


# 7. Template Layout 

| Property | Values | Example |
| --- | --- | --- |
| box-align |	start/end/center/base |	box-align : start |
| box-direction |	normal/reverse | box-direction : normal |
| box-flex |	normal | box-flex : normal |
| box-flex-group | integer | box-flex-group : 2 |
| box-lines |	single/multiple |	box-lines : single |
| box-orient |	horizontal/vertical/inline-axis/block-axis | box-orient : inline |
| box-pack | start/end/center/justify	| box-pack : justify |
| box-sizing | content-box/padding-box/border-box/margin-box | box-sizing : margin-box |
| tab-side | top/bottom/left/right | tab-side : left |


# 8. Table

| Property | Possible Values |
| --- | --- |
| border-collapse |	collapse/separate |
| empty-cells |	show/hide |
| border-spacing |	?%/?px |
| table-layout |	auto/fixed |
| caption-side | top/bottom/left/right |


# 9. Columns 

| Property | Values | Example |
| --- | --- | --- |
| column-count |	auto/number | column-count : 10 |
| column-fill |	auto/balance/balance-all | column-fill : balance |
| column-gap	| normal/?px |	column-gap : 5px |
| column-rule-width |	thin/medium/thick/?px	| column-rule-width : medium column-rule-width : 2px |
| column-rule-style	| border-style – dotted/solid/hidden/double/ dashed/groove/hidden/inset/outset/inherit	| column-rule-style : dotted |
| column-rule-color |	color	| column-rule-color : black |
| column-width |	auto/?px | column-width : 10px |
| column-span	| 1/all |	column-span : all |


# 10. Colors 
| Property | Values | Example |
| --- | --- | --- |
| color	| inherit/color |	color : green |
| opacity |	inherit/number level |	opacity : 4 |



# 11. Grid Positioning 
| Property | Values | Example |
| --- | --- | --- |
| grid-columns |	none/inherit/?px/?%/x%-y%	| grid-columns : 10px |
| grid-rows |	none/inherit/?px/?%/x%-y%	| grid-rows : 40% |



# 12. List and Markers 
| Property | Values |
| --- | --- |
| list-style-type	| none/asterisks/box/check/circle/diamond/disc/hyphen/square/decimal/decimal-leading-zero/lower-roman/upper-roman/lower-alpha/upper-alpha/lower-greek/lower-latin/upper-latin/hebrew/armenian/georgian/cjk-ideographic/hiragana/katakana/hiragana-iroha/katakana-iroha/footnotes **Example: { list-style-type : upper-roman}** |
| list-style-position	| ?%/?px **Example: list-style-position : 20px** |
| list-style-image | none/url **Example: list-style-image : url(‘hackrhome.gif’);** |
| marker-offset	| auto/?px **Example: marker-offset : auto** |


# 13. Animations
| Property | Values | Example |
| --- | --- | --- |
| animation-name |	none/ID	| animation-name : myfirstanim |
| animation-duration |	time |	animation-duration : 5s |
| animation-timing-function |	ease/linear/ease-in/easeout/ease-in-out/cubic-Bezier(number, number, number, number) |	animation-timing-function : linear; |
| animation-delay	| time |	animation-delay : 5ms |
| animation-iteration-count |	inherit/number |	animation-iteration-count : 5 |
| animation-direction |	normal/alternate	| animation-direction :  alternate |
| animation-play-state | running/paused	| animation-play-state : running |
| animation-fill-mode |	None/backwards/ forwards/both/initial/inherit |	animation-fill-mode : both |



# 14. Outline
| Property | Values | Example |
| --- | --- | --- |
| outline-color |	Color name | outline-color : green |
| outline-style	| none/dotted/dashed/solid/double/groove/ridge/inset/outset |	outline-style : solid |
| outline-width |	thin/medium/thick/?px |	outline-width : medium outline-width : 20px |
| outline-offset | inherit/?px | outline-offset :  15px |



# 15. Hyperlink
| Property | Values | Example |
| --- | --- | --- |
| target-name |	current/root/parent/new/modal/"string" | target-name : parent |
| target-new | tab/window/none | target-new : window |
| target-position |	front/back/above/behind	| target-position : front |
