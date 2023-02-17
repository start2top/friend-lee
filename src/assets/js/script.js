document.addEventListener('DOMContentLoaded', () => {
     const carPrice = document.querySelector('#price'),
     initPayment = document.querySelector('#initial-payment'),
     leaseTerm = document.querySelector('#lease-term'),
     initPersentage = document.querySelector('#init_percentage'),
     leasingSum = document.querySelector('#leasing_sum'),
     monthlyPayment = document.querySelector('#monthly_payment'),
     formContainer = document.querySelectorAll('.main_form_container'),
     priceValue = document.querySelector('#price_value');

         formContainer.forEach((e) => {
              if(e.getAttribute('disabled') == 'true') {
                e.style.opacity = '.3';
                e.childNodes.forEach((elem) => {
                       elem.setAttribute('contenteditable', 'false');
                       elem.setAttribute('disabled', 'true');
                    })
              }
        })

    

            
    });

//     e.childNodes.forEach((elem) => {
//         elem.setAttribute('disabled', '');
//    })