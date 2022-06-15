window.addEventListener("DOMContentLoaded", () => {
  let elForm = document.querySelector(".js-form");
  let elInput = document.querySelector(".js-input");
  let resultPerson = document.querySelector(".time-text");
  let resultBikingPerson = document.querySelector(".time-text-biking");
  let resultCar = document.querySelector(".time-text-car");
  let resulPlane = document.querySelector(".time-text-plane");
  let elValid = document.querySelector(".el-not-valid");

  let sppedPerson = 3.6;
  let sppedBikingPerson = 20.1;
  let sppedCar = 70;
  let sppedPlane = 800;

  function person() {
    return Math.floor(+elInput.value / sppedPerson);
  }

  function bike() {
    return Math.floor(+elInput.value / sppedBikingPerson);
  }

  function car() {
    return Math.floor(+elInput.value / sppedCar);
  }

  function plane() {
    return Math.floor(+elInput.value / sppedPlane);
  }

  function sppedApp() {
    elForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if(elInput.value >= 0 && isNaN()) {
        resultPerson.textContent = person() + " Soat";
        resultBikingPerson.textContent = bike() + " Soat";
        resultCar.textContent = car() + " Soat";
        resulPlane.textContent = plane() + " Soat";
        elInput.classList.remove('is-invalid')
        elInput.classList.add('is-valid')
        return;
      }

      if(elInput > 0) {
        elValid.textContent = " Iltimos, musbat son kiriting"
        elInput.classList.add('is-invalid')
      }

    });
  }
  sppedApp();
});
