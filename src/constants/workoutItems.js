import { Tooglebtn, workoutimg1, workoutimg2 } from "../assets";

export const workoutItems = [
  {
    name: "Full Body Workout",
    time: "Today 3pm",
    icon: <img src={Tooglebtn} alt="Toggle button" />,
    image: <img src={workoutimg1} alt="Workout image 1" />,
  },
  {
    name: "Upper Body Workout",
    time: "4 Feb, 3:30pm",
    icon: <img src={Tooglebtn} alt="Toggle button" />, // Add icon property here
    image: <img src={workoutimg2} alt="Workout image 2" />,
  },
];
