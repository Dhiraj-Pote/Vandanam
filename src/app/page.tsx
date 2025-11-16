"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-verse]')) {
        setSelected(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <section className="mb-4 text-center pt-2">
        <h1 className="text-4xl font-bold mb-2 text-[#5a3a1a]">Welcome to Vandanam</h1>
        <p className="text-sm text-[#6b4423] max-w-2xl mx-auto">
          Offering prayers at the lotus feet of Kṛṣṇa whose another name is Uttamaśloka 
          <br/>
            (one who is offered prayers with best selected verses)
          </p>
        
      </section>

      <section id="mangalacaran" className="mb-24 bg-[#f3d4a5] rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-12 text-[#5a3a1a]">MangalaCharan Prayers</h1>
        <div className="space-y-12">
          <div>
            <p data-verse onClick={() => setSelected(selected === 'v1' ? null : 'v1')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v1' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              oṁ ajñāna-timirāndhasya<br/>
              jñānāñjana-śalākayā<br/>
              cakṣur unmīlitaṁ yena<br/>
              tasmai śrī-gurave namaḥ
            </p>
            <p data-verse onClick={() => setSelected(selected === 't1' ? null : 't1')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't1' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I was born in the darkest ignorance, and my spiritual master opened my eyes with the torch of knowledge. I offer my respectful obeisances unto him.
            </p>
          </div>
          
          <div>
            <p data-verse onClick={() => setSelected(selected === 'v2' ? null : 'v2')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v2' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              śrī-caitanya-mano-'bhīṣṭaṁ<br/>
              sthāpitaṁ yena bhū-tale<br/>
              svayaṁ rūpaḥ kadā mahyaṁ<br/>
              dadāti sva-padāntikam
            </p>
            <p data-verse onClick={() => setSelected(selected === 't2' ? null : 't2')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't2' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              When will Śrīla Rūpa Gosvāmī Prabhupāda, who has established within this material world the mission to fulfill the desire of Lord Caitanya, give me shelter under his lotus feet?
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v3' ? null : 'v3')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v3' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              vande 'haṁ śrī-guroḥ śrī-yuta-pada-<br/>
              kamalaṁ śrī-gurūn vaiṣṇavāṁś ca<br/>
              śrī-rūpaṁ sāgrajātaṁ saha-gaṇa-<br/>
              raghunāthānvitaṁ taṁ sa-jīvam<br/>
              sādvaitaṁ sāvadhūtaṁ parijana-<br/>
              sahitaṁ kṛṣṇa-caitanya-devaṁ<br/>
              śrī-rādhā-kṛṣṇa-pādān saha-gaṇa-<br/>
              lalitā-śrī-viśākhānvitāṁś ca
            </p>
            <p data-verse onClick={() => setSelected(selected === 't3' ? null : 't3')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't3' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I offer my respectful obeisances unto the lotus feet of my spiritual master and unto the feet of all Vaiṣṇavas. I offer my respectful obeisances unto the lotus feet of Śrīla Rūpa Gosvāmī along with his elder brother Sanātana Gosvāmī, as well as Raghunātha Dāsa and Raghunātha Bhaṭṭa, Gopāla Bhaṭṭa and Śrīla Jīva Gosvāmī. I offer my respectful obeisances to Lord Kṛṣṇa Caitanya and Lord Nityānanda along with Advaita Ācārya, Gadādhara, Śrīvāsa and other associates. I offer my respectful obeisances to Śrīmatī Rādhārāṇī and Śrī Kṛṣṇa along with Their associates Śrī Lalitā and Viśākhā.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v4' ? null : 'v4')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v4' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              he kṛṣṇa karuṇā-sindho<br/>
              dīna-bandho jagat-pate<br/>
              gopeśa gopikā-kānta<br/>
              rādhā-kānta namo 'stu te
            </p>
            <p data-verse onClick={() => setSelected(selected === 't4' ? null : 't4')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't4' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              O my dear Kṛṣṇa, You are the friend of the distressed and the source of creation. You are the master of the gopīs and the lover of Rādhārāṇī. I offer my respectful obeisances unto You.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v5' ? null : 'v5')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v5' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              tapta-kāñcana-gaurāṅgi<br/>
              rādhe vṛndāvaneśvari<br/>
              vṛṣabhānu-sute devi<br/>
              praṇamāmi hari-priye
            </p>
            <p data-verse onClick={() => setSelected(selected === 't5' ? null : 't5')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't5' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I offer my respects to Rādhārāṇī, whose bodily complexion is like molten gold and who is the Queen of Vṛndāvana. You are the daughter of King Vṛṣabhānu, and You are very dear to Lord Kṛṣṇa.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v6' ? null : 'v6')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v6' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              vāñchā-kalpa-tarubhyaś ca<br/>
              kṛpā-sindhubhya eva ca<br/>
              patitānāṁ pāvanebhyo<br/>
              vaiṣṇavebhyo namo namaḥ
            </p>
            <p data-verse onClick={() => setSelected(selected === 't6' ? null : 't6')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't6' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I offer my respectful obeisances unto all the Vaiṣṇava devotees of the Lord. They can fulfill the desires of everyone, just like desire trees, and they are full of compassion for the fallen souls.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v7' ? null : 'v7')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v7' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              nama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale<br/>
              śrīmate bhaktivedānta-svāmin iti nāmine<br/>
              namas te sārasvate deve gaura-vāṇī-pracāriṇe<br/>
              nirviśeṣa-śūnyavādī-pāścātya-deśa-tāriṇe
            </p>
            <p data-verse onClick={() => setSelected(selected === 't7' ? null : 't7')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't7' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I offer my respectful obeisances unto His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, who is very dear to Lord Krishna, having taken shelter at His lotus feet. Our respectful obeisances are unto you, O spiritual master, servant of Bhaktisiddhanta Saraswati Goswami. You are kindly preaching the message of Lord Chaitanyadeva and delivering the Western countries, which are filled with impersonalism and voidism.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v8' ? null : 'v8')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v8' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              śrī-kṛṣṇa-caitanya prabhu-nityānanda<br/>
              śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda
            </p>
            <p data-verse onClick={() => setSelected(selected === 't8' ? null : 't8')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't8' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I offer my obeisances to Śrī Kṛṣṇa Caitanya, Prabhu Nityānanda, Śrī Advaita, Gadādhara, Śrīvāsa and all others in the line of devotion.
            </p>
          </div>

          <div>
            <p className="italic text-2xl text-[#6b4423] mt-16">
              hare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare<br/>
              hare rāma hare rāma rāma rāma hare hare
            </p>
          </div>
        </div>
      </section>

      <section id="bhagavatam" className="mb-24 bg-[#f3d4a5] rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-12 text-[#5a3a1a]">Prayers to Recite Bhāgavatam</h1>
        <div className="space-y-12">
          <div>
            <p data-verse onClick={() => setSelected(selected === 'v4' ? null : 'v4')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v4' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              oṁ namo bhagavate vāsudevāya
            </p>
            <p data-verse onClick={() => setSelected(selected === 't4' ? null : 't4')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't4' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
             I offer my respectful obeisances unto Lord Vāsudeva, the Supreme Personality of Godhead.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v5' ? null : 'v5')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v5' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              vyāsāya viṣṇu-rūpāya vyāsa-rūpāya viṣṇave<br/>
              namo vai brahma-nidhaye vāsiṣṭhāya namo namaḥ
            </p>
            <p data-verse onClick={() => setSelected(selected === 't5' ? null : 't5')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't5' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              I offer my respectful obeisances unto Śrīla Vyāsadeva, who is a form of Lord Viṣṇu, 
              and unto Lord Viṣṇu, who appears in the form of Vyāsadeva. I offer my obeisances 
              unto the great sage who is the treasure house of all Vedic knowledge.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v6' ? null : 'v6')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v6' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              śrīmad-bhāgavataṁ purāṇam amalaṁ yad vaiṣṇavānāṁ priyaṁ<br/>
              yasmin pāramahaṁsyam ekam amalaṁ jñānaṁ paraṁ gīyate<br/>
              tatra jñāna-virāga-bhakti-sahitaṁ naiṣkarmyam āviskṛtaṁ<br/>
              tac chṛṇvan su-paṭhan vicāraṇa-paro bhaktyā vimucyen naraḥ
            </p>
            <p data-verse onClick={() => setSelected(selected === 't6' ? null : 't6')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't6' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
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
            <p data-verse onClick={() => setSelected(selected === 'v7' ? null : 'v7')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v7' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              ceto-darpaṇa-mārjanaṁ bhava-mahā-dāvāgni-nirvāpaṇaṁ<br/>
              śreyaḥ-kairava-candrikā-vitaraṇaṁ vidyā-vadhū-jīvanam<br/>
              ānandāmbudhi-vardhanaṁ prati-padaṁ pūrṇāmṛtāsvādanaṁ<br/>
              sarvātma-snapanaṁ paraṁ vijayate śrī-kṛṣṇa-saṅkīrtanam
            </p>
            <p data-verse onClick={() => setSelected(selected === 't7' ? null : 't7')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't7' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
              Glory to the śrī-kṛṣṇa-saṅkīrtana, which cleanses the heart of all the dust accumulated for years 
              and extinguishes the fire of conditional life, of repeated birth and death. This saṅkīrtana movement 
              is the prime benediction for humanity at large because it spreads the rays of the benediction moon. 
              It is the life of all transcendental knowledge. It increases the ocean of transcendental bliss, 
              and it enables us to fully taste the nectar for which we are always anxious.
            </p>
          </div>

          <div>
            <p data-verse onClick={() => setSelected(selected === 'v8' ? null : 'v8')} className={`italic text-xl text-[#6b4423] mb-6 pl-4 ${selected === 'v8' ? 'border-l-4 border-[#da9d5b] -ml-1' : ''}`}>
              tṛṇād api sunīcena<br/>
              taror api sahiṣṇunā<br/>
              amāninā mānadena<br/>
              kīrtanīyaḥ sadā hariḥ
            </p>
            <p data-verse onClick={() => setSelected(selected === 't8' ? null : 't8')} className={`text-[#5a3a1a] max-w-3xl mx-auto relative ${selected === 't8' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]' : ''}`}>
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
