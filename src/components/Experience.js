import React, { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import SectionWraper from "../hoc/SectionWraper";
import { textVariant } from "../utils/Motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../contents/Content";
import ExperienceCard from "./ExperienceCard";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";
import AddTimeLineModal from "./modal/AddTimeLineModal";
import { useTimeLine } from "../hooks/useTimeLine";

const Experience = () => {
  const { user } = useSelector((state) => state.profile);
  const [addTimeLineModal, setAddTimeLineModal] = useState(false);
  const { timeLines, isLoading } = useTimeLine();
  return (
    <div className="w-full mt-20">
      <div className="w-11/12 max-w-[1200px] mx-auto">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            What I have learnt so far
          </p>
          <div className="flex items-center justify-between flex-wrap">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Learning Timeline.
            </h2>
            {user && (
              <AddButton onClick={() => setAddTimeLineModal(true)}>
                Add TimeLine
              </AddButton>
            )}
          </div>
        </motion.div>

        <div className="mt-20">
          <VerticalTimeline>
            {timeLines.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              ></ExperienceCard>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {addTimeLineModal && (
        <AddTimeLineModal
          setAddTimeLineModal={setAddTimeLineModal}
        ></AddTimeLineModal>
      )}
    </div>
  );
};

export default SectionWraper(Experience, "");
