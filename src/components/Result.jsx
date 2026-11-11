export default function Result({score = 70}){
          let label;
          if (score >= 60) {
           label = "Pass";
          } else {
           label = "Retry";
          }


  const label2 = score >= 60 ? "Pass" : "Retry";

  return <p>{label} / {label2}</p>;
}

