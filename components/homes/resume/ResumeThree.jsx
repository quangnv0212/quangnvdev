import { eca } from "@/data/eca";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { knoledges } from "@/data/knoledges";
import { skillData } from "@/data/skills";
import Image from "next/image";
import React from "react";

export default function ResumeThree() {
  return (
    <div className="bostami-page-content-wrap">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15">
          <h2 className="page-title">resume</h2>
        </div>
      </div>

      <div className="section-wrapper pl-60 pr-60 mb-60">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="mb-20 bostami-section-title-wrap">
              <h4 className="section-title">
                <Image
                  width={38}
                  height={23}
                  src="/assets/img/icon/edu-icon-2.png"
                  alt="education"
                />
                Education
              </h4>
            </div>

            <div className="bostami-card-wrap">
              {education.map((elm, i) => (
                <div
                  className={`bostami-card-item ${elm.bgClass} ${
                    i + 1 != education.length && "mb-20"
                  } `}
                >
                  <span className="card-subtitle">{elm.session}</span>
                  <h6 className="card-title">
                    {elm.cardTitle} <span>- {elm.cardSubtitleSecondary},</span>
                  </h6>
                  <p className="card-text">{elm.locatopn}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6 col-lg-5">
            <div className="mb-20 bostami-section-title-wrap">
              <h4 className="section-title">
                <Image
                  width={30}
                  height={27}
                  src="/assets/img/icon/exper-icon-2.png"
                  alt="experience"
                />
                experience
              </h4>
            </div>

            {experiences.map((elm, i) => (
              <div
                key={i}
                className={`bostami-card-item ${elm.bgClass} ${
                  i + 1 != experiences.length && "mb-20"
                } `}
              >
                <span className="card-subtitle">{elm.session}</span>
                <h6 className="card-title">{elm.role}</h6>
                <p className="card-text">{elm.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="mb-20 bostami-section-title-wrap">
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

            <p className="font-bold card-text">{elm.locatopn}</p>
          </div>
        ))}
            </div>
          </div>

          <div className="col-xl-6 col-lg-5">
            <div className="mb-20 bostami-section-title-wrap">
              <h4 className="section-title">Skills</h4>
            </div>

            <div className="knowledeges-item-wrap">
              {knoledges.map((elm, i) => (
                <span key={i} className="gk-item">
                  {elm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
