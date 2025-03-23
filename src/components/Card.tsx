"use client";
import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";
import React from "react";

export default function Card({
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: {
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: Function;
}) {
  const ratingId = `${venueName} Rating`;
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <InteractiveCard contentName={venueName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div>
        <div className="w-full h-[30%] p-[10px] text-pink-500">{venueName}</div>
        {onRatingChange ? (
          <Rating
            onClick={(e) => {
              e.stopPropagation();
            }}
            name={ratingId}
            id={ratingId}
            data-testid={ratingId}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              onRatingChange(venueName, newValue);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </InteractiveCard>
  );
}
