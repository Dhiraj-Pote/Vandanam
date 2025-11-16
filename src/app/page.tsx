"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [selectedTranslation, setSelectedTranslation] = useState<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.verse-text') && !target.closest('.translation-text')) {
        setSelectedVerse(null);
        setSelectedTranslation(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2 text-[#5a3a1a]">Welcome to Vandanam</h1>
        <p className="text-sm text-[#6b4423] max-w-2xl mx-auto">
          Offering prayers at the lotus feet of Kṛṣṇa whose another name is Uttamaśloka (who's offered prayers with best selected verses)
        </p>
      </section>

      <section id="mangalacaran" className="mb-24 bg-[#f3d4a5] rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-12 text-[#5a3a1a]">MangalaCharan Prayers</h1>
        <div className="space-y-12">
          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 1 ? null : 1)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 1 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              oṁ ajñāna-timirāndhasya<br/>
              jñānāñjana-śalākayā<br/>
              cakṣur unmīlitaṁ yena<br/>
              tasmai śrī-gurave namaḥ
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 1 ? null : 1)}
              className={`translation-text text-[#5a3a1a] max-w-3xl mx-auto transition-all duration-200 ${selectedTranslation === 1 ? 'border-l-4 border-[#da9d5b] pl-4' : ''}`}
            >
              I offer my respectful obeisances unto my spiritual master, who has opened my eyes, 
              which were blinded by the darkness of ignorance, with the torchlight of knowledge.
            </p>
          </div>
          
          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 2 ? null : 2)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 2 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              namo mahā-vadānyāya<br/>
              kṛṣṇa-prema-pradāya te<br/>
              kṛṣṇāya kṛṣṇa-caitanya-<br/>
              nāmne gaura-tviṣe namaḥ
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 2 ? null : 2)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 2 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              O most munificent incarnation! You are Kṛṣṇa Himself appearing as Śrī Kṛṣṇa Caitanya Mahāprabhu. 
              You have assumed the golden color of Śrīmatī Rādhārāṇī, and You are widely distributing pure love of Kṛṣṇa. 
              We offer our respectful obeisances unto You.
            </p>
          </div>

          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 3 ? null : 3)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 3 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              śrī-kṛṣṇa-caitanya prabhu-nityānanda<br/>
              śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 3 ? null : 3)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 3 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              I offer my obeisances to Śrī Kṛṣṇa Caitanya, Prabhu Nityānanda, Śrī Advaita, 
              Gadādhara, Śrīvāsa and all the devotees of Lord Caitanya.
            </p>
          </div>
        </div>
      </section>

      <section id="bhagavatam" className="mb-24 bg-[#f3d4a5] rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-12 text-[#5a3a1a]">Prayers to Recite Bhāgavatam</h1>
        <div className="space-y-12">
          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 4 ? null : 4)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 4 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              oṁ namo bhagavate vāsudevāya
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 4 ? null : 4)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 4 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              <br/>I offer my respectful obeisances unto Lord Vāsudeva, the Supreme Personality of Godhead.
            </p>
          </div>

          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 5 ? null : 5)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 5 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              vyāsāya viṣṇu-rūpāya vyāsa-rūpāya viṣṇave<br/>
              namo vai brahma-nidhaye vāsiṣṭhāya namo namaḥ
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 5 ? null : 5)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 5 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              I offer my respectful obeisances unto Śrīla Vyāsadeva, who is a form of Lord Viṣṇu, 
              and unto Lord Viṣṇu, who appears in the form of Vyāsadeva. I offer my obeisances 
              unto the great sage who is the treasure house of all Vedic knowledge.
            </p>
          </div>

          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 6 ? null : 6)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 6 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              śrīmad-bhāgavataṁ purāṇam amalaṁ yad vaiṣṇavānāṁ priyaṁ<br/>
              yasmin pāramahaṁsyam ekam amalaṁ jñānaṁ paraṁ gīyate<br/>
              tatra jñāna-virāga-bhakti-sahitaṁ naiṣkarmyam āviskṛtaṁ<br/>
              tac chṛṇvan su-paṭhan vicāraṇa-paro bhaktyā vimucyen naraḥ
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 6 ? null : 6)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 6 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              Śrīmad-Bhāgavatam is the spotless Purāṇa. It is most dear to the Vaiṣṇavas because it describes 
              the pure and supreme knowledge of the paramahaṁsas. This Bhāgavatam reveals the means for becoming 
              free from all material work, together with the processes of transcendental knowledge, renunciation 
              and devotion. Anyone who seriously tries to understand Śrīmad-Bhāgavatam, who properly hears and 
              chants it with devotion, becomes completely liberated.
            </p>
          </div>
        </div>
      </section>

      <section id="siksastakam" className="mb-24 bg-[#f3d4a5] rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-3 text-[#5a3a1a]">Śikṣāṣṭakam</h1>
        <p className="mb-12 italic text-base text-[#6b4423]">Eight Verses of Instruction by Śrī Caitanya Mahāprabhu</p>
        
        <div className="space-y-12">
          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 7 ? null : 7)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 7 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              ceto-darpaṇa-mārjanaṁ bhava-mahā-dāvāgni-nirvāpaṇaṁ<br/>
              śreyaḥ-kairava-candrikā-vitaraṇaṁ vidyā-vadhū-jīvanam<br/>
              ānandāmbudhi-vardhanaṁ prati-padaṁ pūrṇāmṛtāsvādanaṁ<br/>
              sarvātma-snapanaṁ paraṁ vijayate śrī-kṛṣṇa-saṅkīrtanam
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 7 ? null : 7)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 7 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              Glory to the śrī-kṛṣṇa-saṅkīrtana, which cleanses the heart of all the dust accumulated for years 
              and extinguishes the fire of conditional life, of repeated birth and death. This saṅkīrtana movement 
              is the prime benediction for humanity at large because it spreads the rays of the benediction moon. 
              It is the life of all transcendental knowledge. It increases the ocean of transcendental bliss, 
              and it enables us to fully taste the nectar for which we are always anxious.
            </p>
          </div>

          <div>
            <p 
              onClick={() => setSelectedVerse(selectedVerse === 8 ? null : 8)}
              className={`verse-text italic text-xl text-[#6b4423] mb-6 inline-block text-left transition-all duration-200 relative ${selectedVerse === 8 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              tṛṇād api sunīcena<br/>
              taror api sahiṣṇunā<br/>
              amāninā mānadena<br/>
              kīrtanīyaḥ sadā hariḥ
            </p>
            <p 
              onClick={() => setSelectedTranslation(selectedTranslation === 8 ? null : 8)}
              className={`translation-text text-[#5a3a1a] inline-block text-left transition-all duration-200 relative ${selectedTranslation === 8 ? 'before:content-[""] before:absolute before:left-[-200px] before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}
            >
              One should chant the holy name of the Lord in a humble state of mind, thinking oneself lower 
              than the straw in the street; one should be more tolerant than a tree, devoid of all sense 
              of false prestige, and should be ready to offer all respect to others. In such a state of 
              mind one can chant the holy name of the Lord constantly.
            </p>
          </div>
        </div>
      </section>

      <section id="offenses" className="mb-24 bg-[#f3d4a5] rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-3 text-[#5a3a1a]">Ten Offenses While Chanting</h1>
        <p className="mb-12 italic text-base text-[#6b4423]">Nāmāparādha - Offenses to be avoided while chanting the holy names</p>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">1. Blaspheming devotees</h2>
            <p className="text-[#5a3a1a]">
              To criticize or blaspheme devotees who have dedicated their lives to propagating the holy name of the Lord.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">2. Considering demigods equal to the Supreme Lord</h2>
            <p className="text-[#5a3a1a]">
              To consider the names of demigods like Lord Śiva or Lord Brahmā to be equal to, or independent of, 
              the name of Lord Viṣṇu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">3. Disobeying the spiritual master</h2>
            <p className="text-[#5a3a1a]">
              To disobey the orders of the spiritual master who is engaged in distributing the holy name.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">4. Blaspheming Vedic literature</h2>
            <p className="text-[#5a3a1a]">
              To blaspheme the Vedic literature or literature in pursuance of the Vedic version.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">5. Considering the holy name imagination</h2>
            <p className="text-[#5a3a1a]">
              To consider the glories of chanting Hare Kṛṣṇa to be imaginary or exaggerated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">6. Giving some interpretation on the holy name</h2>
            <p className="text-[#5a3a1a]">
              To give some interpretation on the holy names of the Lord based on mundane scholarship.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">7. Committing sinful activities on the strength of chanting</h2>
            <p className="text-[#5a3a1a]">
              To commit sinful activities on the strength of the holy name of the Lord, thinking that since 
              one is chanting the holy name, sinful activities will be nullified.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">8. Considering chanting equal to pious activities</h2>
            <p className="text-[#5a3a1a]">
              To consider the chanting of Hare Kṛṣṇa to be one of the auspicious ritualistic activities 
              offered in the Vedas as fruitive activities (karma-kāṇḍa).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">9. Instructing faithless persons</h2>
            <p className="text-[#5a3a1a]">
              To instruct a faithless person about the glories of the holy name. Such instructions should 
              not be given to the faithless.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#6b4423]">10. Not having complete faith in chanting</h2>
            <p className="text-[#5a3a1a]">
              To not have complete faith in the chanting of the holy names and to maintain material 
              attachments, even after understanding so many instructions on this matter.
            </p>
          </div>

          <div className="mt-12 p-6 bg-[#f5dcc4]/60 border border-[#d4a574] rounded-lg">
            <p className="text-sm italic text-[#5a3a1a]">
              These ten offenses should be carefully avoided by anyone who wishes to make spiritual advancement 
              through the chanting of the holy names. By avoiding these offenses, one can chant purely and 
              achieve the ultimate goal of life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}