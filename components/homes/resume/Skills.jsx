import { eca } from "@/data/eca";
import { education } from "@/data/education";
import { skillData } from "@/data/skills";
import React from "react";

export default function Skills() {
  return (
    <div className="col-xl-6 col-lg-7">
      <div className="bostami-section-title-wrap mb-20">
        <h4 className="section-title">Extra Curricular Activities</h4>
      </div>

      <div className="skill-bar-wrap">
      {eca.map((elm, i) => (
          <div
            className={`bostami-card-item ${elm.bgClass} ${
              i + 1 != education.length && "mb-20"
            } `}
          >
            <span className="card-subtitle">{elm.session}</span>
            <h6 className="card-title">
              {elm.cardTitle} <span>- {elm.cardSubtitleSecondary},</span>
            </h6>
            <p className="py-3">{elm.des}</p>

            <p className="card-text font-bold">{elm.locatopn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
