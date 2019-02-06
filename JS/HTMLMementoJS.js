//==================================Color Button=======================================//
function changeTheme (color) {
  document.body.className = color + '-theme'
}
//====================================================================================//

//==================================Menu Button=======================================//
// window.onload = function() {
// 	let btns = document.getElementsByClassName("menu-btn")
// 	for (let i = 0; i < btns.length; i++) {
// 	  btns[i].addEventListener("click", function changeStatus () {
// 	    let current = document.getElementsByClassName("active")
// 	    current[0].className = current[0].className.replace(" active", "")
// 	    this.className += " active"
// 	 })
// 	}
// }
// window.onload = function () {
// 	let btns = document.getElementsByClassName("menu-btn")
// }

function changeStatus (element) {
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    element.className += " active"
 }
//====================================================================================//
//====================================================================================//
// window.addEventListener ('mouseup', function (event) {
// 	let icon = document.getElementById("user-add")
// 	let box = document.getElementById("register-wrapper")
// 	let checkbox = document.getElementById("register-checkbox")

// 	if (event.target != box && event.target !== icon) {
// 		checkbox.checked = false
// 	}
// })
//====================================================================================//


let isRegisterContainerOpen = false

$(document).click(function (e) {
	let container = $(".container")

	if ($(e.target).is(".button") && !isRegisterContainerOpen) {
		container.show()
		isRegisterContainerOpen = true
	}
	else if (!$(e.target).is(container) && !container.has(e.target).length) {
		container.hide()
		isRegisterContainerOpen = false
	}
})


let isColorWrapperOpen = false

$(document).click(function (e) {
	let container = $('#color-options-wrapper')

	if ($(e.target).is('#color-button') && !isColorWrapperOpen) {
		container.show()
		isColorWrapperOpen = true
	}
	else if (!$(e.target).is(container) && !container.has(e.target).length) {
		container.hide()
		isColorWrapperOpen = false
	}
})



// let isRegisterContainerOpen = false

// $(document).click(function (e) {
// 	let button = [$('#register-button'),$('#color-button')]
// 	let container = [$('#register-wrapper'),$('#color-options-wrapper')]

// 	for(let i=0; i < container.length; i++) {
// 		if ($(e.target).is(button[i]) && !isRegisterContainerOpen) {
// 			container[i].removeClass("hide")
// 			isRegisterContainerOpen = true
// 			console.log("test")
// 		}

// 		else if (!$(e.target).is(container[i]) && !container[i].has(e.target).length) {
// 			container[i].addClass("hide")
// 			isRegisterContainerOpen = false
// 		}
// 	}
// })

// let openPopup = null

// $(document).click(function (e) {
//   If clicking popup trigger 1
//       
// 	If openPopup === 'popup1' then close popup
//       else then openPopup = 'popup1'
//   
// 	If clicking popup trigger 2
//       If openPopup === 'popup2' then close popup
//       else then openPopup = 'popup2'
// })
