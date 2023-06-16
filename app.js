document.addEventListener('DOMContentLoaded', () => {
    const triangle = document.getElementById('triangle');
    const square = document.getElementById('square');
    const circle = document.getElementById('circle');
    const resetButton = document.getElementById('reset-button');
  
    function changeColorAndMoveUp(element) {
      element.style.backgroundColor = '#c0392b';
      element.style.transform = 'translateY(-10px)';
    }
  
    function resetColorAndMoveDown(element) {
      element.style.backgroundColor = '';
      element.style.transform = '';
    }
  
    function hideElement(element) {
      element.style.display = 'none';
    }
  
    function showElement(element) {
      element.style.display = 'inline-block';
    }
  
    triangle.addEventListener('mouseover', () => {
      changeColorAndMoveUp(triangle);
    });
  
    triangle.addEventListener('mouseout', () => {
      resetColorAndMoveDown(triangle);
    });
  
    triangle.addEventListener('click', () => {
      hideElement(triangle);
    });
  
    square.addEventListener('mouseover', () => {
      changeColorAndMoveUp(square);
    });
  
    square.addEventListener('mouseout', () => {
      resetColorAndMoveDown(square);
    });
  
    square.addEventListener('click', () => {
      hideElement(square);
    });
  
    circle.addEventListener('mouseover', () => {
      changeColorAndMoveUp(circle);
    });
  
    circle.addEventListener('mouseout', () => {
      resetColorAndMoveDown(circle);
    });
  
    circle.addEventListener('click', () => {
      hideElement(circle);
    });
  
    resetButton.addEventListener('click', () => {
      showElement(triangle);
      showElement(square);
      showElement(circle);
    });
  });