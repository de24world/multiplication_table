import "./styles.css";

var Num1 = Math.ceil(Math.random() * 9);
var Num2 = Math.ceil(Math.random() * 9);
var Count = Num1 * Num2;

var Body = document.body;
var Word = document.createElement("div");
Word.textContent = String(Num1) + "x" + String(Num2) + "?";
document.body.append(Word);

document.body.append(Word);
var Form = document.createElement("form");
document.body.append(Form);

var InputTag = document.createElement("input");
InputTag.type = "number";
Form.append(InputTag);

var Button = document.createElement("button");
Form.append(Button);
Button.textContent = "Enter!";

var Result = document.createElement("div");
document.body.append(Result);

Form.addEventListener("submit", function CallbackFunction(e) {
  e.preventDefault();
  if (Count === Number(InputTag.value)) {
    Result.textContent = "Right";
    Num1 = Math.ceil(Math.random() * 9);
    Num2 = Math.ceil(Math.random() * 9);
    Count = Num1 * Num2;
    Word.textContent = String(Num1) + "x" + String(Num2) + "?";
    InputTag.value = "";
    InputTag.focus();
  } else {
    Result.textContent = "Fail";
    InputTag.value = "";
    InputTag.focus();
  }
});
