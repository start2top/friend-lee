document.addEventListener('DOMContentLoaded', () => {
     const carPrice = document.querySelector('#price'),
     priceValue = document.querySelector('#price_value'),
     initPayment = document.querySelector('#initial_payment'),
     initPaymentValue = document.querySelector('#initial_payment_value'),
     leaseTerm = document.querySelector('#lease_term'),
     leaseTermValue = document.querySelector('#lease_term_value'),
     initPersentage = document.querySelector('#init_percentage'),
     leasingSum = document.querySelector('#leasing_sum'),
     monthlyPayment = document.querySelector('#monthly_payment'),
     form = document.querySelector('.main_form'),
     formContainer = document.querySelectorAll('.main_form_container');

     // выбираем блоки инпутов и отключаем все при атрибьюте disabled
        
        form.childNodes.forEach((element) => {
            if (element.getAttribute('disabled') == 'true' || element.disabled || element.getAttribute('disabled') == 'disabled') {
                    element.style.opacity = '.3';
                    element.childNodes.forEach((item) => {
                        item.setAttribute('disabled', 'true');
                        item.setAttribute('contenteditable', 'false');
                    })
                    }
                })
                // Меняем h2 стомость автомобиля через инпуты
                carPrice.addEventListener('click', () => {
                    let data = carPrice.value;
                    priceValue.innerHTML = data;
                })
                
                initPayment.addEventListener('click', () => {
                    let data = initPayment.value;
                    initPaymentValue.innerHTML = data;
                })

                leaseTerm.addEventListener('click', () => {
                    let data = leaseTerm.value;
                    leaseTermValue.innerHTML = data;
                })
                    ///====== Калькулятор (Тест) =======
                form.childNodes.forEach((e) => {
                    let inputs = e.querySelectorAll('input');
                  //  let data = inputs.this.value;
                    console.log(inputs);
                })

                
                
    });