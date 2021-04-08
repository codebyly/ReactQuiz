export default function QuizResult({ points, amount }) {
  return (
    <div className="quiz-result ">
      <h3>Quiz finished!</h3>
      {/* <p>Your final points: {points}</p> */}
      <p>
        You've answered {points}/{amount} questions correctly!
      </p>
      <strong>{getStatusText(points, amount)}</strong>
    </div>
  );
}

function getStatusText(points, amount) {
  if (points < amount / 2) {
    return "Try again! 😅";
  }
  if (points >= amount && points < amount) {
    return "Not too bad... 😄 ";
  }
  if ((points = amount)) {
    return "Perfect Score! 🎉";
  } else {
    return "Congratulations 🎉, you finished!";
  }
}
