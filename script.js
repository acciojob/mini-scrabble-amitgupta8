//your code here
function countLetters() {
        // Get the input text
        const inputText = document.getElementById('evaluatedText').value;
        
        // Count the number of letters
        const letterCount = inputText.length;
        
        // Update the letter count display
        document.getElementById('letterCount').innerHTML = letterCount;
      }
