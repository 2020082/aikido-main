import { useState, useEffect } from "react";
interface TypewriterAnimationProps {
  children: string;
}
const TypewriterAnimation: React.FC<TypewriterAnimationProps> = ({
  children,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(children.substring(0, index));
      setIndex(index + 1);
    }, 40);

    return () => clearTimeout(timer);
  }, [index, children]);

  return (
    <div className="typewriter">
      <p>{text}</p>
    </div>
  );
};

export default TypewriterAnimation;
