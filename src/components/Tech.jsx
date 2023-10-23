import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import TechLogo from "./TechLogo"


const Tech = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="flex lg:hidden flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <TechLogo icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
