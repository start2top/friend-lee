document.addEventListener('DOMContentLoaded', () => {
     const carPrice = document.querySelector('#price'),
     initPayment = document.querySelector('#initial-payment'),
     leaseTerm = document.querySelector('#lease-term'),
     initPersentage = document.querySelector('#init_percentage'),
     leasingSum = document.querySelector('#leasing_sum'),
     monthlyPayment = document.querySelector('#monthly_payment'),
     form = document.querySelector('.main_form'),
     priceValue = document.querySelector('#price_value');

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
    
    
        
            
    });