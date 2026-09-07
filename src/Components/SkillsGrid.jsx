import React from 'react'
import { skills } from '../data/skills.js'
import SkillCard from './SkillCard.jsx'

function SkillsGrid() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 py-8">
      <div className="max-w-5xl mx-auto bg-[#ececec] rounded-2xl p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <SkillCard key={skill.number} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsGrid
