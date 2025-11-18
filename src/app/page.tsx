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
      <section className="mb-4 text-center pt-2 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#5a3a1a]">
          Welcome to Vandanam
        </h1>
        <p className="text-xs sm:text-sm text-[#6b4423] max-w-4xl mx-auto mb-8 animate-fade-in">
          Offering prayers at the lotus feet of Kṛṣṇa, whose another name
          is Uttamaśloka- (one who is glorified with best selected verses)
        </p>
      </section>

      <section
        id="mangalacaran"
        className="mb-24 bg-[#f3d4a5] rounded-lg p-4 sm:p-6 md:p-10 shadow-lg text-center mx-4 sm:mx-0"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-12 text-[#5a3a1a] inline-block border-b-4 border-[#da9d5b] pb-2">
          MangalaCharan Prayers
        </h1>
        <div className="space-y-6 sm:space-y-12">
          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v1" ? null : "v1")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v1" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              oṁ ajñāna-timirāndhasya
              <br />
              jñānāñjana-śalākayā
              <br />
              cakṣur unmīlitaṁ yena
              <br />
              tasmai śrī-gurave namaḥ
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t1" ? null : "t1")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t1"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              I was born in the darkest ignorance, and my spiritual master
              opened my eyes with the torch of knowledge. I offer my respectful
              obeisances unto him.
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v2" ? null : "v2")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v2" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              śrī-caitanya-mano-'bhīṣṭaṁ
              <br />
              sthāpitaṁ yena bhū-tale
              <br />
              svayaṁ rūpaḥ kadā mahyaṁ
              <br />
              dadāti sva-padāntikam
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t2" ? null : "t2")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t2"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              When will Śrīla Rūpa Gosvāmī Prabhupāda, who has established
              within this material world the mission to fulfill the desire of
              Lord Caitanya, give me shelter under his lotus feet?
            </p>
          </div>

          <div>
           <p
              data-verse
              onClick={() => setSelected(selected === "v3" ? null : "v3")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v3" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              vande 'haṁ śrī-guroḥ śrī-yuta-pada-
              <br />
              kamalaṁ śrī-gurūn vaiṣṇavāṁś ca
              <br />
              śrī-rūpaṁ sāgrajātaṁ saha-gaṇa-
              <br />
              raghunāthānvitaṁ taṁ sa-jīvam
              <br />
              sādvaitaṁ sāvadhūtaṁ parijana-
              <br />
              sahitaṁ kṛṣṇa-caitanya-devaṁ
              <br />
              śrī-rādhā-kṛṣṇa-pādān saha-gaṇa-
              <br />
              lalitā-śrī-viśākhānvitāṁś ca
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t3" ? null : "t3")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t3"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              I offer my respectful obeisances unto the lotus feet of my
              spiritual master and unto the feet of all Vaiṣṇavas. I offer my
              respectful obeisances unto the lotus feet of Śrīla Rūpa Gosvāmī
              along with his elder brother Sanātana Gosvāmī, as well as
              Raghunātha Dāsa and Raghunātha Bhaṭṭa, Gopāla Bhaṭṭa and Śrīla
              Jīva Gosvāmī. I offer my respectful obeisances to Lord Kṛṣṇa
              Caitanya and Lord Nityānanda along with Advaita Ācārya, Gadādhara,
              Śrīvāsa and other associates. I offer my respectful obeisances to
              Śrīmatī Rādhārāṇī and Śrī Kṛṣṇa along with Their associates Śrī
              Lalitā and Viśākhā.
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v4" ? null : "v4")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v4" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              he kṛṣṇa karuṇā-sindho
              <br />
              dīna-bandho jagat-pate
              <br />
              gopeśa gopikā-kānta
              <br />
              rādhā-kānta namo 'stu te
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t4" ? null : "t4")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t4"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              O my dear Kṛṣṇa, You are the friend of the distressed and the
              source of creation. You are the master of the gopīs and the lover
              of Rādhārāṇī. I offer my respectful obeisances unto You.
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v5" ? null : "v5")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v5" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              tapta-kāñcana-gaurāṅgi
              <br />
              rādhe vṛndāvaneśvari
              <br />
              vṛṣabhānu-sute devi
              <br />
              praṇamāmi hari-priye
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t5" ? null : "t5")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t5"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              I offer my respects to Rādhārāṇī, whose bodily complexion is like
              molten gold and who is the Queen of Vṛndāvana. You are the
              daughter of King Vṛṣabhānu, and You are very dear to Lord Kṛṣṇa.
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v6" ? null : "v6")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v6" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              vāñchā-kalpa-tarubhyaś ca
              <br />
              kṛpā-sindhubhya eva ca
              <br />
              patitānāṁ pāvanebhyo
              <br />
              vaiṣṇavebhyo namo namaḥ
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t6" ? null : "t6")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t6"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              I offer my respectful obeisances unto all the Vaiṣṇava devotees of
              the Lord. They can fulfill the desires of everyone, just like
              desire trees, and they are full of compassion for the fallen
              souls.
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v7" ? null : "v7")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v7" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              nama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale
              <br />
              śrīmate bhaktivedānta-svāmin iti nāmine
              <br />
              namas te sārasvate deve gaura-vāṇī-pracāriṇe
              <br />
              nirviśeṣa-śūnyavādī-pāścātya-deśa-tāriṇe
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t7" ? null : "t7")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t7"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              I offer my respectful obeisances unto His Divine Grace A. C.
              Bhaktivedanta Swami Prabhupada, who is very dear to Lord Krishna,
              having taken shelter at His lotus feet. Our respectful obeisances
              are unto you, O spiritual master, servant of Bhaktisiddhanta
              Saraswati Goswami. You are kindly preaching the message of Lord
              Chaitanyadeva and delivering the Western countries, which are
              filled with impersonalism and voidism.
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v8" ? null : "v8")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v8" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              śrī-kṛṣṇa-caitanya prabhu-nityānanda
              <br />
              śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t8" ? null : "t8")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "t8"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              I offer my obeisances to Śrī Kṛṣṇa Caitanya, Prabhu Nityānanda,
              Śrī Advaita, Gadādhara, Śrīvāsa and all others in the line of
              devotion.
            </p>
          </div>

          <div>
            <b>
              <p className="italic text-2xl text-[#964e14] mt-16">
                hare Kṛṣṇa hare Kṛṣṇa Kṛṣṇa Kṛṣṇa hare hare
                <br />
                hare rāma hare rāma rāma rāma hare hare
              </p>
            </b>
          </div>
        </div>
      </section>

      <section
        id="bhagavatam"
        className="mb-24 bg-[#f3d4a5] rounded-lg p-4 sm:p-6 md:p-10 shadow-lg text-center mx-4 sm:mx-0"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-12 text-[#5a3a1a] inline-block border-b-4 border-[#da9d5b] pb-2">
          Verses Recited Before Śrīmad-Bhāgavatam Class
        </h1>

        <div className="space-y-6 sm:space-y-12">
          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v11" ? null : "v11")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "v11" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <b>oṁ namo bhagavate vāsudevāya </b>
              <span className="text-base text-gray-500 relative top-[-2px]">
                {" "}
                (&times;3)
              </span>
              <br />I offer my respectful obeisances unto Lord Vāsudeva, the
              Supreme Personality of Godhead.
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t4" ? null : "t4")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "t4"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              {/* I offer my respectful obeisances unto Lord Vāsudeva, the Supreme
              Personality of Godhead. */}
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v5" ? null : "v5")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "v5" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              nārāyaṇaṁ namaskṛtya
              <br />
              naraṁ caiva narottamam
              <br />
              devīṁ sarasvatīṁ vyāsaṁ <br />
              tato jayam udīrayet
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t5" ? null : "t5")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "t5"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                Before reciting this Śrīmad-Bhāgavatam, which is the very means
                of conquest, one should offer respectful obeisances unto the
                Personality of Godhead, Nārāyaṇa, unto Nara-nārāyaṇa Ṛṣi, the
                supermost human being, unto mother Sarasvatī, the goddess of
                learning, and unto Śrīla Vyāsadeva, the author. [SB 1.2.4]
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v6" ? null : "v6")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "v6" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              śṛṇvatāṁ sva-kathāḥ kṛṣṇaḥ
              <br />
              puṇya-śravaṇa-kīrtanaḥ
              <br />
              hṛdy antaḥ stho hy abhadrāṇi
              <br />
              vidhunoti suhṛt satām
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t6" ? null : "t6")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "t6"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                Śrī Kṛṣṇa, the Personality of Godhead, who is the Paramātmā
                [Supersoul] in everyone’s heart and the benefactor of the
                truthful devotee, cleanses desire for material enjoyment from
                the heart of the devotee who has developed the urge to hear His
                messages, which are in themselves virtuous when properly heard
                and chanted. [SB 1.2.17]
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "v7" ? null : "v7")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "v7" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              naṣṭa-prāyeṣv abhadreṣu
              <br />
              nityaṁ bhāgavata-sevayā
              <br />
              bhagavaty uttama-śloke <br />
              bhaktir bhavati naiṣṭhikī
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "t7" ? null : "t7")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "t7"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                By regular attendance in classes on the Bhāgavatam and by
                rendering of service to the pure devotee, all that is
                troublesome to the heart is almost completely destroyed, and
                loving service unto the Personality of Godhead, who is praised
                with transcendental songs, is established as an irrevocable
                fact. [SB 1.2.18]
              </b>
            </p>
          </div>
        </div>
      </section>

      <section
        id="siksastakam"
        className="mb-24 bg-[#f3d4a5] rounded-lg p-4 sm:p-6 md:p-10 shadow-lg text-center mx-4 sm:mx-0"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-[#5a3a1a] inline-block border-b-4 border-[#da9d5b] pb-2">
          Śikṣāṣṭakam
        </h1>
        <p className="mb-6 sm:mb-10 italic text-xs sm:text-sm md:text-base text-[#6b4423]">
          Eight Verses of Instruction by Śrī Caitanya Mahāprabhu
        </p>

        <div className="space-y-6 sm:space-y-12">
          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s1" ? null : "s1")}
              className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
                selected === "s1" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (1)
              <br />
              ceto-darpaṇa-mārjanam bhava-mahā-dāvāgni-nirvāpaṇam
              <br />
              śreyaḥ-kairava-candrikā-vitaraṇam vidyā-vadhū-jīvanam
              <br />
              ānandāmbudhi-vardhanam prati-padaḿ pūrṇāmṛtāsvādanam
              <br />
              sarvātma-snapanam param vijayate śrī-kṛṣṇa-sańkīrtanam
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st1" ? null : "st1")}
              className={`text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto relative ${
                selected === "st1"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                Glory to the sri-krsna-sankirtana, which cleanses the heart of
                all the dust accumulated for years and extinguishes the fire of
                conditional life, of repeated birth and death. This sankirtana
                movement is the prime benediction for humanity at large because
                it spreads the rays of the benediction moon. It is the life of
                all transcendental knowledge. It increases the ocean of
                transcendental bliss, and it enables us to fully taste the
                nectar for which we are always anxious.
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s2" ? null : "s2")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s2" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (2)
              <br />
              nāmnām akāri bahudhā nija-sarva-śaktis
              <br />
              tatrārpitā niyamitaḥ smaraṇe na kālaḥ
              <br />
              etādṛśī tava kṛpā bhagavan mamāpi
              <br />
              durdaivam īdṛśam ihājani nānurāgaḥ
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st2" ? null : "st2")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st2"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                O my Lord, Your holy name alone can render all benediction to
                living beings, and thus You have hundreds and millions of names,
                like Krsna and Govinda. In these transcendental names You have
                invested all Your transcendental energies. There are not even
                hard and fast rules for chanting these names. O my Lord, out of
                kindness You enable us to easily approach You by Your holy
                names, but I am so unfortunate that I have no attraction for
                them.
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s3" ? null : "s3")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s3" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (3)
              <br />
              tṛṇād api sunīcena
              <br />
              taror api sahiṣṇunā
              <br />
              amāninā mānadena
              <br />
              kīrtanīyaḥ sadā hariḥ
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st3" ? null : "st3")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st3"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                One should chant the holy name of the Lord in a humble state of
                mind, thinking oneself lower than the straw in the street; one
                should be more tolerant than a tree, devoid of all sense of
                false prestige, and should be ready to offer all respect to
                others. In such a state of mind one can chant the holy name of
                the Lord constantly.
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s4" ? null : "s4")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s4" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (4)
              <br />
              na dhanaṁ na janaṁ na sundarīṁ
              <br />
              kavitāṁ vā jagad-īśa kāmaye
              <br />
              mama janmani janmanīśvare
              <br />
              bhavatād bhaktir ahaitukī tvayi
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st4" ? null : "st4")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st4"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                O almighty Lord, I have no desire to accumulate wealth, nor do I
                desire beautiful women nor do I want any number of followers. I
                only want Your causeless devotional service, birth after birth.
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s5" ? null : "s5")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s5" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (5)
              <br />
              ayi nanda-tanuja kiṅkaraṁ
              <br />
              patitaṁ māṁ viṣame bhavāmbudhau
              <br />
              kṛpayā tava pāda-paṅkaja-
              <br />
              sthita-dhūlī-sadṛśaṁ vicintaya
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st5" ? null : "st5")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st5"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                O son of Maharaja Nanda (Krsna), I am Your eternal servitor, yet
                somehow or other I have fallen into the ocean of birth and
                death. Please pick me up from this ocean of death and place me
                as one of the atoms at Your lotus feet.
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s6" ? null : "s6")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s6" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (6)
              <br />
              nayanaṁ galad-aśru-dhārayā
              <br />
              vadanaṁ gadgada-ruddhayā girā
              <br />
              pulakair nicitaṁ vapuḥ kadā
              <br />
              tava-nāma-grahaṇe bhaviṣyati
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st6" ? null : "st6")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st6"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                O my Lord, when will my eyes be decorated with tears of love
                flowing constantly when I chant Your holy name? When will my
                voice choke up, and when will the hairs of my body stand on end
                at the recitation of Your name?
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s7" ? null : "s7")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s7" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (7)
              <br />
              yugāyitaṁ nimeṣeṇa
              <br />
              cakṣuṣā prāvṛṣāyitam
              <br />
              śūnyāyitaṁ jagat sarvaṁ
              <br />
              govinda-viraheṇa me
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st7" ? null : "st7")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st7"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                O Govinda! Feeling Your separations I am considering a moment to
                be like twelve years or more. Tears are flowing from my eyes
                like torrents of rain, and I am feeling all vacant in the world
                in Your absence.
              </b>
            </p>
          </div>

          <div>
            <p
              data-verse
              onClick={() => setSelected(selected === "s8" ? null : "s8")}
              className={`text-2xl text-black mb-6 pl-4 ${
                selected === "s8" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              (8)
              <br />
              āśliṣya vā pāda-ratāṁ pinaṣṭu mām
              <br />
              adarśanān marma-hatāṁ karotu vā
              <br />
              yathā tathā vā vidadhātu lampaṭo
              <br />
              mat-prāṇa-nāthas tu sa eva nāparaḥ
            </p>
            <p
              data-verse
              onClick={() => setSelected(selected === "st8" ? null : "st8")}
              className={`text-xl text-black max-w-3xl mx-auto relative ${
                selected === "st8"
                  ? "before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#da9d5b]"
                  : ""
              }`}
            >
              <b>
                I know no one but Krsna as my Lord, and He shall remain so even
                if He handles me roughly by His embrace or makes me
                brokenhearted by not being present before me. He is completely
                free to do anything and everything, for He is always my
                worshipful Lord, unconditionally.
              </b>
            </p>
          </div>
        </div>
      </section>

      <section
        id="offenses"
        className="mb-24 bg-[#f3d4a5] rounded-lg p-4 sm:p-6 md:p-10 shadow-lg text-center mx-4 sm:mx-0"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#5a3a1a] inline-block border-b-4 border-[#da9d5b] pb-2">
          Ten Offenses While Chanting
        </h1>
        <p className="mb-6 sm:mb-12 italic text-xs sm:text-sm md:text-base text-[#6b4423]">
          Nāmāparādha - Offenses to be avoided while chanting the holy names
        </p>

        <p
          data-verse
          onClick={() => setSelected(selected === "v11" ? null : "v11")}
          className={`text-lg sm:text-xl md:text-2xl text-black mb-3 sm:mb-6 pl-2 sm:pl-4 ${
            selected === "v11" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
          }`}
        >
          
          <b>
    bahu janma kare yadi śravaṇa, kīrtana
    <br/>
    tabu ta’ nā pāya kṛṣṇa-pade prema-dhana
  </b> 
  {/* Dedicated invisible spacer span */}
  <span className="small-gap" /> 

  If one is infested with the ten offenses in the chanting of the Hare Kṛṣṇa mahā-mantra, despite his endeavor to chant the holy name for many births, he will not get the love of Godhead that is the ultimate goal of this chanting.
</p><br/>



<b> <p
          data-verse
          onClick={() => setSelected(selected === "v12" ? null : "v12")}
          className={`text-lg sm:text-xl md:text-2xl text-[#0b0000] mb-3 sm:mb-6 pl-2 sm:pl-4 ${
            selected === "v12" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
          }`}
        >         
          
    -:The ten offenses against the chanting of the holy name<br/> are as follows:-
   </p><br/></b>

        <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto text-left">
          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o1" ? null : "o1")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o1" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(1)</span>To blaspheme the devotees who have dedicated their lives for <br/> propagating the holy name of the Lord.
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p 
              data-verse
              onClick={() => setSelected(selected === "o2" ? null : "o2")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o2" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(2)</span>To consider the names of demigods like Lord Śiva or Lord Brahmā <br/>to be equal to or independent of the name of Lord Viṣṇu.
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o3" ? null : "o3")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o3" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(3)</span>To disobey the orders of the spiritual master.
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o4" ? null : "o4")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o4" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(4)</span>To blaspheme the Vedic literature or literature in pursuance <br/> of the Vedic version.
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o5" ? null : "o5")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o5" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(5)</span>To consider the glories of chanting Hare Kṛṣṇa to be an imagination.
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o6" ? null : "o6")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o6" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(6)</span>Giving some interpretation to the holy name of the lord.
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o7" ? null : "o7")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o7" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(7)</span>Committing sinful activities on the strength of chanting
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o8" ? null : "o8")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o8" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(8)</span>To consider the chanting of Hare Kṛṣṇa to be one of the auspicious ritualistic activities offered in the Vedas as fruitive activities (karma-kāṇḍa).
            </p>
          </div>

          <div className="py-2 sm:py-3 border-b border-[#d4a574]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o9" ? null : "o9")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o9" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(9)</span>To instruct a faithless person about the glories of the holy name.
            </p>
          </div>

          <div className="pb-1 sm:pb-2 border-b-2 border-[#c9a66b]">
            <p
              data-verse
              onClick={() => setSelected(selected === "o10" ? null : "o10")}
              className={`text-sm sm:text-base md:text-lg font-semibold text-[#6b4423] pl-3 sm:pl-6 ${
                selected === "o10" ? "border-l-4 border-[#da9d5b] -ml-1" : ""
              }`}
            >
              <span className="inline-block w-12">(10)</span>To not have complete faith in the chanting of the holy names and to maintain material attachments, even after understanding so many instructions on this matter. <br/> <br/> *It is also an offense to be inattentive while chanting. 
            </p>
          </div>

          <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-[#f5dcc4] to-[#f3d4a5] border-l-4 border-[#da9d5b] rounded">
            <p className="text-2xl sm:text-base md:text-xl italic text-[#5a3a1a] text-center font-semibold">
              Every devotee who claims to be Vaishnava must guard against these offenses in order to quickly achieve the desired success <br/><b className="text-[#964e14]">KRISHNA PREMA!!!</b>
            </p>
          </div>
        </div>

<h3 className="mt-4  text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-4 text-[#5a3a1a] inline-block border-b-4 border-[#da9d5b] pb-2">
          Śrī Vaiṣṇava praṇāma
        </h3>

<p className="">    
 <b>
 vāñchā-kalpa-tarubhyaś ca
              <br />
              kṛpā-sindhubhya eva ca
              <br />
              patitānāṁ pāvanebhyo
              <br />
              vaiṣṇavebhyo namo namaḥ
</b>
  
  {/* Dedicated invisible spacer span */}
  <span className="small-gap" /> 
</p>
 Now, let us offer our humble obeisances unto all the Vaiṣṇava devotees of the Lord, <br/> who are just like wish-fulfilling desire trees, and are full of compassion for the fallen souls.
      </section>
    </>
  );
}
