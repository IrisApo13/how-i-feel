import { motion } from 'framer-motion'
import Guide from '../components/Guide'
import { Screen, Title, BigButton, Card } from '../components/ui'
import { getCharacter } from '../data/characters'

export default function SentScreen({ profile, onHome }) {
  const character = getCharacter(profile.characterId)

  return (
    <Screen>
      <div className="flex-1 flex flex-col items-center justify-center gap-6 py-4 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        >
          <Guide character={character} pose="cheer" size={190} />
        </motion.div>

        <Title sub={`That was a really good job, ${profile.name}.`}>
          Sent to your nurse
        </Title>

        {/* Telling the child what happens next matters: the most common reason
            a kid stops using something like this is not knowing whether it
            did anything. */}
        <Card className="w-full text-left">
          <p className="font-bold mb-2">What happens now</p>
          <ol className="flex flex-col gap-2 text-ink/70">
            <li>1. Your nurse can see what you told them.</li>
            <li>2. They&apos;ll come and see you.</li>
            <li>3. If it gets worse, tell a grown-up right away.</li>
          </ol>
        </Card>
      </div>

      <BigButton tone="soft" onClick={onHome}>Back to start</BigButton>
    </Screen>
  )
}
