document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navButtons = document.querySelector('.math-nav-buttons');

    // Función para toggle del menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navButtons.classList.toggle('active');
        
        const spans = menuToggle.querySelectorAll('span');
        if (navButtons.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    }

    // Evento para el botón de menú
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita la propagación del evento
            toggleMenu();
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.math-nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Solo para móviles
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (navButtons.classList.contains('active') && 
            !e.target.closest('.math-nav-buttons') && 
            !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });
});


 // Función para mostrar/ocultar soluciones
    function toggleSolution1(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    // Función para verificar evaluación de función (versión mejorada)
    function checkEvaluation1() {
      const inputs = [
        document.getElementById('eval-input1.1').value.trim(),
        document.getElementById('eval-input1.2').value.trim(),
        document.getElementById('eval-input1.3').value.trim(),
        document.getElementById('eval-input1.4').value.trim(),
        document.getElementById('eval-input1.5').value.trim(),
        document.getElementById('eval-input1.6').value.trim(),
        document.getElementById('eval-input1.7').value.trim()
      ];
      
      const correctAnswers = ["5", "3", "4", "2", "20","23", "20"];
      const feedback = document.getElementById('eval-feedback1');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

    function toggleSolution2(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation2() {
      const inputs = [
        document.getElementById('eval-input2.1').value.trim(),
        document.getElementById('eval-input2.2').value.trim(),
        document.getElementById('eval-input2.3').value.trim()
      ];
      
      const correctAnswers = ["2", "8", "1" ];
      const feedback = document.getElementById('eval-feedback2');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

     function toggleSolution3(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation3() {
      const inputs = [
        document.getElementById('eval-input3.1').value.trim(),
        document.getElementById('eval-input3.2').value.trim(),
        document.getElementById('eval-input3.3').value.trim(),
        document.getElementById('eval-input3.4').value.trim(),
        document.getElementById('eval-input3.5').value.trim(),
        document.getElementById('eval-input3.6').value.trim(),
        document.getElementById('eval-input3.7').value.trim()
      ];
      
      const correctAnswers = ["5", "5", "10", "25", "10", "75", "85" ];
      const feedback = document.getElementById('eval-feedback3');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }
    

     function toggleSolution4(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation4() {
      const inputs = [
        document.getElementById('eval-input4.1').value.trim(),
        document.getElementById('eval-input4.2').value.trim(),
        document.getElementById('eval-input4.3').value.trim(),
        document.getElementById('eval-input4.4').value.trim(),
        document.getElementById('eval-input4.5').value.trim(),
        document.getElementById('eval-input4.6').value.trim(),
        document.getElementById('eval-input4.7').value.trim(),
        document.getElementById('eval-input4.8').value.trim(),
        document.getElementById('eval-input4.9').value.trim(),
        document.getElementById('eval-input4.10').value.trim()
      ];
      
      const correctAnswers = ["2", "2", "2", "16", "4", "2", "16", "8", "2", "4" ];
      const feedback = document.getElementById('eval-feedback4');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

     function toggleSolution5(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation5() {
      const inputs = [
        document.getElementById('eval-input5.1').value.trim(),
        document.getElementById('eval-input5.2').value.trim(),
        document.getElementById('eval-input5.3').value.trim()
      ];
      
      const correctAnswers = ["20", "60", "-40" ];
      const feedback = document.getElementById('eval-feedback5');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }
    

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar dominio

    function toggleSolution6(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkDomain1() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback1');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, 4] porque la expresión dentro de la raíz debe ser ≥ 0";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, 4) U (4, ∞) porque la expresión de debajo de la fracción debe ser distinta de 0";
        feedback.className = "feedback incorrect";
      }
    }

    function toggleSolution8(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain3() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback3');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! El dominio es (0, ∞) porque la expresión de debajo de la fracción debe ser distinta de 0 y ademas la raiz debe ser positiva";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (0, ∞) porque x debe ser > 0";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution7(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain2() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback2');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "B") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, 4) U (4, ∞) porque la expresión de debajo de la fracción debe ser distinta de 0";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, 4] porque 4-x debe ser ≥ 0";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution9(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain4() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback4');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "C") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, ∞) porque no hay ninguna restricción para esta función";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, ∞) porque no hay ninguna restricción para x - 1";
        feedback.className = "feedback incorrect";
      }
    }



    function toggleSolution10(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain5() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback5');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "D") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, 1) U (1, ∞) porque conflictua solo en el 1";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, 1) U (1, ∞) porque conflictua solo en el 1";
        feedback.className = "feedback incorrect";
      }
    }


    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar tabla de valores
    function toggleSolution11(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable1() {
      const val1 = document.getElementById('val1.1').value.trim();
      const val2 = document.getElementById('val1.2').value.trim();
      const val3 = document.getElementById('val1.3').value.trim();
      const val4 = document.getElementById('val1.4').value.trim();
      const feedback = document.getElementById('table-feedback1');
      
      const correct = ["1", "2", "4", "8"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


     function toggleSolution12(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable2() {
      const val1 = document.getElementById('val2.1').value.trim();
      const val2 = document.getElementById('val2.2').value.trim();
      const val3 = document.getElementById('val2.3').value.trim();
      const val4 = document.getElementById('val2.4').value.trim();
      const feedback = document.getElementById('table-feedback2');
      
      const correct = ["0", "-1", "0", "3"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution13(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable3() {
      const val1 = document.getElementById('val3.1').value.trim();
      const val2 = document.getElementById('val3.2').value.trim();
      const val3 = document.getElementById('val3.3').value.trim();
      const val4 = document.getElementById('val3.4').value.trim();
      const feedback = document.getElementById('table-feedback3');
      
      const correct = ["0", "1", "2", "3"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


     function toggleSolution14(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable4() {
      const val1 = document.getElementById('val4.1').value.trim();
      const val2 = document.getElementById('val4.2').value.trim();
      const val3 = document.getElementById('val4.3').value.trim();
      const val4 = document.getElementById('val4.4').value.trim();
      const feedback = document.getElementById('table-feedback4');
      
      const correct = ["-3", "0", "3", "24"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

     function toggleSolution15(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable5() {
      const val1 = document.getElementById('val5.1').value.trim();
      const val2 = document.getElementById('val5.2').value.trim();
      const val3 = document.getElementById('val5.3').value.trim();
      const val4 = document.getElementById('val5.4').value.trim();
      const feedback = document.getElementById('table-feedback5');
      
      const correct = ["0", "1", "2", "3"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }
    

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar paridad

     function toggleSolution16(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity1() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback1');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "B") {
        feedback.textContent = "¡Correcto! La función es impar porque f(-x) = -f(x)";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función es impar porque f(-x) = -f(x)";
        feedback.className = "feedback incorrect";
      }
    }


     function toggleSolution17(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity2() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback2');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! La función es par porque f(-x) = f(x)";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función es par porque f(-x) = f(x)";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution18(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity3() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback3');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "C") {
        feedback.textContent = "¡Correcto! La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution19(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity4() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback4');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "C") {
        feedback.textContent = "¡Correcto! La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback incorrect";
      }
    }




    function toggleSolution20(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity5() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback5');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! La función es par porque f(-x) = f(x)";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función es par porque f(-x) = f(x)";
        feedback.className = "feedback incorrect";
      }
    }
    
    


    //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar transformación

     function toggleSolution21(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkTransform1() {
      const input = document.getElementById('transform-input1').value.trim().replace(/\s+/g, '');
      const feedback = document.getElementById('transform-feedback1');
      
      // Acepta diferentes formas equivalentes de la respuesta
      const correctAnswers = [
        "(x-2)^2+3",
        "1*(x-2)^2+3",
        "3+(x-2)^2",
        "pow(x-2,2)+3",
        "3+pow(x-2,2)"
      ];
      
      if (correctAnswers.includes(input)) {
        feedback.textContent = "¡Correcto! La función transformada es (x-2)² + 3";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (x-2)² + 3";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution22(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkTransform2() {
      const input = document.getElementById('transform-input2').value.trim().replace(/\s+/g, '');
      const feedback = document.getElementById('transform-feedback2');
      
      // Acepta diferentes formas equivalentes de la respuesta
      const correctAnswers = [
        "(x-5)-1",
        "-1+(x-5)"
      ];
      
      if (correctAnswers.includes(input)) {
        feedback.textContent = "¡Correcto! La función transformada es (x-5) - 1";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (x-5) - 1";
        feedback.className = "feedback incorrect";
      }
    }

    //----------------------------------------------------------------------------------------------------------------------------------


    function checkFractions1() {
    const inputs = [
        document.getElementById('frac-input1.11').value.trim(),
        document.getElementById('frac-input1.12').value.trim(),
        document.getElementById('frac-input1.13').value.trim(),
        document.getElementById('frac-input1.14').value.trim(),
        document.getElementById('frac-input1.15').value.trim(),
        document.getElementById('frac-input1.16').value.trim(),
        document.getElementById('frac-input1.17').value.trim(),
        document.getElementById('frac-input1.18').value.trim(),
        document.getElementById('frac-input1.19').value.trim(),
        document.getElementById('frac-input1.110').value.trim(),
        document.getElementById('frac-input1.111').value.trim()
    ];
    
    const correctAnswers = ["3", "5", "2", "4", "4", "5", "15", "8", "20", "23", "20"];
    const feedback = document.getElementById('frac-feedback1');
    
    let allCorrect = true;
    for (let i = 0; i < 10; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}





 function checkFractions2() {
    const inputs = [
        document.getElementById('frac-input1.21').value.trim(),
        document.getElementById('frac-input1.22').value.trim(),
        document.getElementById('frac-input1.23').value.trim(),
        document.getElementById('frac-input1.24').value.trim(),
        document.getElementById('frac-input1.25').value.trim(),
        document.getElementById('frac-input1.26').value.trim(),
        document.getElementById('frac-input1.27').value.trim(),
        document.getElementById('frac-input1.28').value.trim(),
        document.getElementById('frac-input1.29').value.trim(),
        document.getElementById('frac-input1.210').value.trim(),
        document.getElementById('frac-input1.211').value.trim()
    ];
    
    const correctAnswers = ["5", "3", "7", "7", "7", "3", "15", "49", "21", "64", "21"];
    const feedback = document.getElementById('frac-feedback2');
    
    let allCorrect = true;
    for (let i = 0; i < 10; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}






function checkFractions3() {
    const inputs = [
        document.getElementById('frac-input1.31').value.trim(),
        document.getElementById('frac-input1.32').value.trim(),
        document.getElementById('frac-input1.33').value.trim(),
        document.getElementById('frac-input1.34').value.trim(),
        document.getElementById('frac-input1.35').value.trim(),
        document.getElementById('frac-input1.36').value.trim(),
        document.getElementById('frac-input1.37').value.trim(),
        document.getElementById('frac-input1.38').value.trim(),
        document.getElementById('frac-input1.39').value.trim(),
        document.getElementById('frac-input1.310').value.trim(),
        document.getElementById('frac-input1.311').value.trim()
    ];
    
    const correctAnswers = ["4", "4", "3", "3", "3", "4", "16", "9", "12", "25", "12"];
    const feedback = document.getElementById('frac-feedback3');
    
    let allCorrect = true;
    for (let i = 0; i < 10; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}




// Función para verificar reducción de términos
function checkReduction1() {
    const inputs = [
        document.getElementById('reduce-input2.11').value.trim(),
        document.getElementById('reduce-input2.12').value.trim(),
        document.getElementById('reduce-input2.13').value.trim(),
        document.getElementById('reduce-input2.14').value.trim(),
        document.getElementById('reduce-input2.15').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.16').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.17').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.18').value.trim().toLowerCase()
    ];
    
    const correctAnswers = ["1", "1", "11", "-7", "1", "1", "11", "-7"];
    const feedback = document.getElementById('reduce-feedback1');
    
    let allCorrect = true;
    for (let i = 0; i < 8; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La expresión se redujo correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}



function checkReduction2() {
    const inputs = [
        document.getElementById('reduce-input2.21').value.trim(),
        document.getElementById('reduce-input2.22').value.trim(),
        document.getElementById('reduce-input2.23').value.trim(),
        document.getElementById('reduce-input2.24').value.trim(),
        document.getElementById('reduce-input2.25').value.trim(),
        document.getElementById('reduce-input2.26').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.27').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.28').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.29').value.trim().toLowerCase()
    ];
    
    const correctAnswers = ["4", "0", "9", "1", "1", "4", "1", "9", "1"];
    const feedback = document.getElementById('reduce-feedback2');
    
    let allCorrect = true;
    for (let i = 0; i < 8; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La expresión se redujo correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}



function checkReduction3() {
    const inputs = [
        document.getElementById('reduce-input2.31').value.trim(),
        document.getElementById('reduce-input2.32').value.trim(),
        document.getElementById('reduce-input2.33').value.trim(),
        document.getElementById('reduce-input2.34').value.trim(),
        document.getElementById('reduce-input2.35').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.36').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.37').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.38').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.39').value.trim().toLowerCase(),
        document.getElementById('reduce-input2.310').value.trim().toLowerCase()
    ];
    
    const correctAnswers = ["3", "5", "7", "-11", "-25", "3", "5", "7", "-11", "-25"];
    const feedback = document.getElementById('reduce-feedback3');
    
    let allCorrect = true;
    for (let i = 0; i < 8; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La expresión se redujo correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}


//-------------------------------------------------------------------------------------------------------------------------------------

// Función para verificar multiplicación de polinomios
function checkPolynomials1() {
    const inputs = [
        document.getElementById('poly-input3.11').value.trim().toLowerCase(),
        document.getElementById('poly-input3.12').value.trim().toLowerCase(),
        document.getElementById('poly-input3.13').value.trim().toLowerCase(),
        document.getElementById('poly-input3.14').value.trim().toLowerCase(),
        document.getElementById('poly-input3.15').value.trim().toLowerCase(),
        document.getElementById('poly-input3.16').value.trim().toLowerCase(),
        document.getElementById('poly-input3.17').value.trim().toLowerCase()
    ];
    
    const correctAnswers = ["x", "2x", "3x", "6", "x", "x", "6"];
    const feedback = document.getElementById('poly-feedback1');
    
    let allCorrect = true;
    for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La multiplicación se realizó correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}

function checkPolynomials2() {
    const inputs = [
        document.getElementById('poly-input3.21').value.trim().toLowerCase(),
        document.getElementById('poly-input3.22').value.trim().toLowerCase(),
        document.getElementById('poly-input3.23').value.trim().toLowerCase(),
        document.getElementById('poly-input3.24').value.trim().toLowerCase(),
        document.getElementById('poly-input3.25').value.trim().toLowerCase(),
        document.getElementById('poly-input3.26').value.trim().toLowerCase(),
        document.getElementById('poly-input3.27').value.trim().toLowerCase(),
        document.getElementById('poly-input3.28').value.trim().toLowerCase(),
        document.getElementById('poly-input3.29').value.trim().toLowerCase(),
        document.getElementById('poly-input3.30').value.trim().toLowerCase()
    ];
    
    const correctAnswers = ["x", "-2x", "x", "5x", "-10x", "5", "x", "3x", "-9x", "5"];
    const feedback = document.getElementById('poly-feedback2');
    
    let allCorrect = true;
    for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La multiplicación se realizó correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}


function checkPolynomials3() {
    const inputs = [
        document.getElementById('poly-input3.31').value.trim().toLowerCase(),
        document.getElementById('poly-input3.32').value.trim().toLowerCase(),
        document.getElementById('poly-input3.33').value.trim().toLowerCase(),
        document.getElementById('poly-input3.34').value.trim().toLowerCase(),
        document.getElementById('poly-input3.35').value.trim().toLowerCase(),
        document.getElementById('poly-input3.36').value.trim().toLowerCase(),
        document.getElementById('poly-input3.37').value.trim().toLowerCase(),
        document.getElementById('poly-input3.38').value.trim().toLowerCase(),
        document.getElementById('poly-input3.39').value.trim().toLowerCase()
       
    ];
    
    const correctAnswers = ["x", "-2x", "2x", "-4x", "-x", "2x", "x", "-5x", "2x"];
    const feedback = document.getElementById('poly-feedback3');
    
    let allCorrect = true;
    for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La multiplicación se realizó correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}


//-------------------------------------------------------------------------------------------------------------------------
// Función para verificar ecuaciones de primer grado
function checkFirstDegree1() {
    const inputs = [
        document.getElementById('eq1-input4.11').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.12').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.13').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.14').value.trim(),
        document.getElementById('eq1-input4.15').value.trim(),
        document.getElementById('eq1-input4.16').value.trim(),
        document.getElementById('eq1-input4.17').value.trim()
    ];
    
    const correctAnswers = ["2x", "2x", "x", "-7", "5", "5", "-12"];
    const feedback = document.getElementById('eq1-feedback1');
    
    let allCorrect = true;
    for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La ecuación se resolvió correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus pasos.";
        feedback.className = "feedback incorrect";
    }
}


function checkFirstDegree2() {
    const inputs = [
        document.getElementById('eq1-input4.21').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.22').value.trim(),
        document.getElementById('eq1-input4.23').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.24').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.25').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.26').value.trim(),
        document.getElementById('eq1-input4.27').value.trim(),
        document.getElementById('eq1-input4.28').value.trim(),
        document.getElementById('eq1-input4.29').value.trim()
    ];
    
    const correctAnswers = ["2x", "2", "2x", "2x", "x", "2", "4", "4", "-2"];
    const feedback = document.getElementById('eq1-feedback2');
    
    let allCorrect = true;
    for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La ecuación se resolvió correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus pasos.";
        feedback.className = "feedback incorrect";
    }
}




function checkFirstDegree3() {
    const inputs = [
        document.getElementById('eq1-input4.31').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.32').value.trim(),
        document.getElementById('eq1-input4.33').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.34').value.trim(),
        document.getElementById('eq1-input4.35').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.36').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.37').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.38').value.trim(),
        document.getElementById('eq1-input4.39').value.trim(),
        document.getElementById('eq1-input4.310').value.trim(),
        document.getElementById('eq1-input4.311').value.trim(),
        document.getElementById('eq1-input4.312').value.trim(),
        document.getElementById('eq1-input4.313').value.trim(),
        document.getElementById('eq1-input4.314').value.trim(),
        document.getElementById('eq1-input4.315').value.trim().toLowerCase(),
        document.getElementById('eq1-input4.316').value.trim()
    ];
    
    const correctAnswers = ["3x", "12", "6x", "18", "6x", "6x", "-3x", "18", "12", "12", "30", "-3", "30", "-3", "x", "-10"];
    const feedback = document.getElementById('eq1-feedback3');
    
    let allCorrect = true;
    for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! La ecuación se resolvió correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus pasos.";
        feedback.className = "feedback incorrect";
    }
}


// Función para verificar ecuaciones de segundo grado
function checkSecondDegree1() {
    const inputs = [
        document.getElementById('eq2-input5.11').value.trim(),
        document.getElementById('eq2-input5.12').value.trim(),
        document.getElementById('eq2-input5.13').value.trim(),
        document.getElementById('eq2-input5.14').value.trim(),
        document.getElementById('eq2-input5.15').value.trim(),
        document.getElementById('eq2-input5.16').value.trim(),
        document.getElementById('eq2-input5.17').value.trim(),
        document.getElementById('eq2-input5.18').value.trim(),
        document.getElementById('eq2-input5.19').value.trim(),
        document.getElementById('eq2-input5.20').value.trim(),
        document.getElementById('eq2-input5.1.1').value.trim()
    ];
    
    const correctAnswers = ["1", "-5", "6", "-5", "1", "6","25","24", "1", "3", "2"];
    const feedback = document.getElementById('eq2-feedback1');
    
    let allCorrect = true;
    for (let i = 0; i < 9; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! Las raíces se calcularon correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}

function checkSecondDegree2() {
    const inputs = [
        document.getElementById('eq2-input5.21').value.trim(),
        document.getElementById('eq2-input5.22').value.trim(),
        document.getElementById('eq2-input5.23').value.trim(),
        document.getElementById('eq2-input5.24').value.trim(),
        document.getElementById('eq2-input5.25').value.trim(),
        document.getElementById('eq2-input5.26').value.trim(),
        document.getElementById('eq2-input5.27').value.trim(),
        document.getElementById('eq2-input5.28').value.trim(),
        document.getElementById('eq2-input5.29').value.trim(),
        document.getElementById('eq2-input5.30').value.trim(),
        document.getElementById('eq2-input5.2.1').value.trim()
    ];
    
    const correctAnswers = ["1", "13", "42", "13", "1", "42","169","168", "1", "-6", "-7"];
    const feedback = document.getElementById('eq2-feedback2');
    
    let allCorrect = true;
    for (let i = 0; i < 9; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! Las raíces se calcularon correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}


    function checkSecondDegree3() {
    const inputs = [
        document.getElementById('eq2-input5.31').value.trim(),
        document.getElementById('eq2-input5.32').value.trim(),
        document.getElementById('eq2-input5.33').value.trim(),
        document.getElementById('eq2-input5.34').value.trim(),
        document.getElementById('eq2-input5.35').value.trim(),
        document.getElementById('eq2-input5.36').value.trim(),
        document.getElementById('eq2-input5.37').value.trim(),
        document.getElementById('eq2-input5.38').value.trim(),
        document.getElementById('eq2-input5.39').value.trim(),
        document.getElementById('eq2-input5.40').value.trim(),
        document.getElementById('eq2-input5.4.1').value.trim()
    ];
    
    const correctAnswers = ["1", "-2", "-99", "-2", "1", "-99","4","-396", "400", "11", "-9"];
    const feedback = document.getElementById('eq2-feedback3');
    
    let allCorrect = true;
    for (let i = 0; i < 9; i++) {
        if (inputs[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }
    
    if (allCorrect) {
        feedback.textContent = "¡Correcto! Las raíces se calcularon correctamente";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
    }
}


// Funciones para mostrar/ocultar soluciones
    function toggleSolution1(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function toggleSolution2(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    // Función para verificar factorización
    function checkFactorization1() {
      const inputs = [
        document.getElementById('factor-input1.1').value.trim(),
        document.getElementById('factor-input1.2').value.trim(),
        document.getElementById('factor-input1.3').value.trim(),
        document.getElementById('factor-input1.4').value.trim(),
        document.getElementById('factor-input1.5').value.trim()
      ];
      
      const correctAnswers = ["3", "6", "9", "3", "3"];
      const feedback = document.getElementById('factor-feedback1');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! La factorización es perfecta";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


    //----------------------------------------------------------------------------------------------------------------------
    // Función para verificar desigualdades
    function checkInequality1() {
      const inputs = [
        document.getElementById('ineq-input2.1').value.trim(),
        document.getElementById('ineq-input2.2').value.trim(),
        document.getElementById('ineq-input2.3').value.trim(),
        document.getElementById('ineq-input2.4').value.trim(),
        document.getElementById('ineq-input2.5').value.trim(),
        document.getElementById('ineq-input2.6').value.trim(),
        document.getElementById('ineq-input2.7').value.trim()
      ];
      
      const correctAnswers = ["5", "5", "12", "3x", "12", "4", "4"];
      const feedback = document.getElementById('ineq-feedback2');
      
      let allCorrect = true;
      for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! La desigualdad se resolvió perfectamente";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Recuerda mantener la desigualdad cuando divides por números positivos.";
        feedback.className = "feedback incorrect";
      }
    }



     function toggleSolution3(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }


     function checkInequality2() {
      const inputs = [
        document.getElementById('ineq-input6.21').value.trim(),
        document.getElementById('ineq-input6.22').value.trim(),
        document.getElementById('ineq-input6.23').value.trim(),
        document.getElementById('ineq-input6.24').value.trim(),
        document.getElementById('ineq-input6.25').value.trim(),
        document.getElementById('ineq-input6.26').value.trim(),
        document.getElementById('ineq-input6.27').value.trim(),
        document.getElementById('ineq-input6.28').value.trim(),
        document.getElementById('ineq-input6.29').value.trim(),
        document.getElementById('ineq-input6.210').value.trim(),
        document.getElementById('ineq-input6.211').value.trim(),
        document.getElementById('ineq-input6.212').value.trim(),
        document.getElementById('ineq-input6.213').value.trim(),
        document.getElementById('ineq-input6.214').value.trim(),
        document.getElementById('ineq-input6.215').value.trim(),
        document.getElementById('ineq-input6.216').value.trim(),
        document.getElementById('ineq-input6.217').value.trim(),
        document.getElementById('ineq-input6.218').value.trim(),
        document.getElementById('ineq-input6.219').value.trim(),
        document.getElementById('ineq-input6.220').value.trim(),
        document.getElementById('ineq-input6.221').value.trim()
      ];
      
      const correctAnswers = ["6x", "3", "5x", "5", "6x", "3", "3", "5x", "5", "3", "6x", "5x", "2", "6x", "5x", "5x", "2", "5x", "x", "2", "2"];
      const feedback = document.getElementById('ineq-feedback2');
      
      let allCorrect = true;
      for (let i = 0; i < 7; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! La desigualdad se resolvió perfectamente";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Recuerda mantener la desigualdad cuando divides por números positivos.";
        feedback.className = "feedback incorrect";
      }
    }

    //------------------------------------------------------------------------------------------------------------------------------

    // Menú responsive
    document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.querySelector('.menu-toggle');
      const navButtons = document.querySelector('.math-nav-buttons');

      function toggleMenu() {
        menuToggle.classList.toggle('active');
        navButtons.classList.toggle('active');
        
        const spans = menuToggle.querySelectorAll('span');
        if (navButtons.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
          });
        }
      }

      if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
      }

      // Cerrar menú al hacer clic en un enlace (solo móviles)
      const navLinks = document.querySelectorAll('.math-nav-btn');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
            toggleMenu();
          }
        });
      });
    });