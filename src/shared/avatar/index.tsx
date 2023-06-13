import { FC } from "react";
import "./styles.css";
import { RotatingLines } from "react-loader-spinner";
import { lodingimg } from "./data";

interface PropsTypes {
  src?: string;
  alt: string;
  width?: number;
  className?: string;
  loading?: boolean;
}

const Avatar: FC<PropsTypes> = (props) => {
  const { src, alt, width, className, loading = false } = props;
  console.log(width);
  return (
    <div className={`cliped-style cursor-pointer ${className && className}`}>
      {loading ? (
        <div className="flip w-24 h-24 flex justify-center items-center">
          <img
            src={lodingimg}
            alt="loading..."
            style={{ width: width ? width + "px" : "30px" }}
          />
        </div>
      ) : (
        <img
          className="flip-img "
          style={{ width: width ? width + "px" : "30px" }}
          src={src}
          alt={alt}
        />
      )}

      <div className="bg-white">
        <h1></h1>
      </div>
    </div>
  );
};

export default Avatar;
