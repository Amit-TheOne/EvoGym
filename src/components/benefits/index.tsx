import HText from '@/utils/HText'
import { BenefitType, SelectedPage } from '@/utils/types'
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'
import Benefit from './Benefit';
import ActionButton from '@/utils/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (page: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText> MORE THAN JUST GYM. </HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benfit: BenefitType) => (
            <Benefit
              key={benfit.title}
              icon={benfit.icon}
              title={benfit.title}
              description={benfit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION WITH ACTION BUTTON */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div className="mt-16 md:mt-0">
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati soluta maxime tempora expedita vel aliquid sapiente laboriosam adipisci officia ut illum recusandae, quis dolore placeat est ipsam non minus nostrum. Inventore at voluptate necessitatibus iusto pariatur incidunt esse, quos atque perferendis quisquam? Maiores vitae aliquam amet, eaque doloribus facere blanditiis, consequuntur ipsum, rerum fugiat nihil et itaque saepe officiis tempore ratione perferendis? Odit nisi libero accusamus vel reprehenderit incidunt!
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quas, accusamus corporis eius ratione quibusdam nesciunt illum ea, quia impedit labore magnam temporibus nisi neque possimus voluptate, consectetur quae! Cupiditate, repellendus adipisci quia laborum deserunt laboriosam, magni sunt corporis vero praesentium iusto rem ipsam suscipit, alias velit a quae. Est nam ipsa ullam sequi doloremque illum vero laborum consequuntur ut, aspernatur deleniti nulla, veniam maiores?
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <motion.div
                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </motion.div>
            </div>
          </div>
        </div>

      </motion.div>

    </section>
  )
}

export default Benefits;