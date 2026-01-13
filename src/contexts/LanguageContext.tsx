import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.downloadCv": "Download CV",

    // Hero
    "hero.title": "Automation & Robotics Engineering Student",
    "hero.description": "Third-year Automation student with a strong interest in PLC programming, industrial automation, and robotic systems. Passionate about taking innovative and creative approaches to solve technical challenges.",
    "hero.getInTouch": "Get In Touch",
    "hero.scrollToExplore": "Scroll to explore",

    // About
    "about.label": "About Me",
    "about.title": "My Profile",
    "about.description1": "Third-year Automation student proficient in",
    "about.description2": "and currently learning the",
    "about.description3": "environment.",
    "about.description4": "Strong problem solver and team player, with experience working on mini-projects involving multiple communication protocols. Passionate about taking innovative and creative approaches to solve technical challenges.",
    "about.languages": "Languages",
    "about.englishFluent": "English — Fluent",
    "about.finnishBasic": "Finnish — Basic-Intermediate",
    "about.teamwork": "Teamwork",
    "about.teamworkDesc": "Strong collaborator",
    "about.problemSolving": "Problem Solving",
    "about.problemSolvingDesc": "Analytical thinker",
    "about.timeManagement": "Time Management",
    "about.timeManagementDesc": "Efficient & organized",
    "about.communication": "Communication",
    "about.communicationDesc": "Clear & effective",
    "about.creativeThinking": "Creative Thinking",
    "about.creativeThinkingDesc": "Innovative approaches",
    "about.attentionToDetail": "Attention to Detail",
    "about.attentionToDetailDesc": "Precision focused",

    // Skills
    "skills.label": "Technical Expertise",
    "skills.title": "Skills & Proficiencies",
    "skills.currentlyLearning": "Currently Learning",
    "skills.currentlyLearningDesc": "Expanding my expertise in these areas",
    "skills.plcAutomation": "PLC & Automation",
    "skills.plcAutomationDesc": "Industrial control systems and programming",
    "skills.engineeringTools": "Engineering Tools",
    "skills.engineeringToolsDesc": "Design and simulation software",
    "skills.communicationProtocols": "Communication Protocols",
    "skills.communicationProtocolsDesc": "Industrial networking and data exchange",
    "skills.programmingIt": "Programming & IT",
    "skills.programmingItDesc": "Software development and systems",
    "skills.processEngineering": "Process Engineering",
    "skills.processEngineeringDesc": "System design and analysis",
    "skills.safetyStandards": "Safety & Standards",
    "skills.safetyStandardsDesc": "Compliance and risk management",
    "skills.robotics": "Robotics",
    "skills.roboticsDesc": "Robot systems and analysis",
    "skills.learning.opcua": "OPC UA",
    "skills.learning.machineVision": "Machine Vision",
    "skills.learning.industrialRobotics": "Industrial Robotics",
    "skills.learning.projectEconomics": "Engineering Project Economics",
    "skills.learning.stl": "PLC Programming in STL",
    "skills.learning.twincat": "Beckhoff TwinCAT Environment",
    "skills.learning.python": "Python Programming",
    "skills.learning.valmetDna": "Valmet DNA Skills",
    "skills.learning.pidTuning": "PID-Tuning Methods",
    "skills.learning.mpc": "Model Predictive Control",

    // Projects
    "projects.label": "Portfolio",
    "projects.academicTitle": "Academic Projects",
    "projects.visualComponents": "Visual Components & Robot Programming",
    "projects.personal": "Personal Learning Projects",
    "projects.watchVideo": "Watch Video",
    
    // Academic Projects
    "projects.pumpingModule.title": "Pumping Module PLC Program",
    "projects.pumpingModule.description": "Planned and created a PLC program for a pumping module using on/off valves, pressure and temperature sensors, AS-i bus communication, VFDs, and PID controllers.",
    "projects.hmiScada.title": "HMI & SCADA Development",
    "projects.hmiScada.description": "Built HMI and SCADA programs for a pumping module using WinCC, providing real-time monitoring and control capabilities.",
    "projects.matlab.title": "MATLAB Process Modelling",
    "projects.matlab.description": "Modelled a process in MATLAB, tuned the system, and worked with ratio control and cascade control strategies.",
    "projects.network.title": "Industrial Network Configuration",
    "projects.network.description": "Built and configured network structures in a virtual environment, including routing, switching, firewalls, and IPv4/IPv6 addressing.",
    "projects.modbus.title": "Modbus TCP C# Application",
    "projects.modbus.description": "Created a C# GUI program to work using the Modbus TCP communication protocol for industrial device communication.",
    "projects.fieldDevice.title": "Field Device Planning",
    "projects.fieldDevice.description": "Prepared device lists for a process, including field device planning and documentation, I/O lists, wiring diagrams, and circuit diagrams.",
    "projects.valmetDna.title": "Valmet DNA",
    "projects.valmetDna.description": "Used Valmet DNA to create loops diagrams to pump water between tanks. The system incorporated PID tuning, cascade and ratio control structures, safety interlocks, GSD file interpretation, ACN I/O module configuration, and analog/digital signal scaling and data conversion.",
    
    // Visual Components Projects
    "projects.warehouse.title": "Warehouse Simulation using Visual Components",
    "projects.warehouse.description": "Planned and modelled a simulated warehouse in Visual Components, programming two robots to carry out palletizing and pick-and-place operations while integrating safety systems and devices, and defining storage, sorting and transport zones using process nodes.",
    "projects.mir.title": "Basic MIR Robot Programming",
    "projects.mir.description": "Programmed a MIR robot to map out a laboratory environment, assigned safety and operational zones, localized charging zones and carried out basic navigation missions.",
    "projects.ur.title": "Basic Universal Robot Programming",
    "projects.ur.description": "Programmed a Universal Robot, utilizing camera-based vision feedback to orient the robot and pre-configured positions to place a workpiece onto a designated board.",
    
    // Personal Projects
    "projects.eventLogger.title": "Event Logger in TwinCAT",
    "projects.eventLogger.description": "Developed an event logging system using Beckhoff TwinCAT and STL programming.",
    "projects.objectSorting.title": "Object Sorting System",
    "projects.objectSorting.description": "Basic object sorting based on the type of material using TIA Portal (Simulated).",
    "projects.multiwindow.title": "Multiwindow C# Modbus App",
    "projects.multiwindow.description": "Multiwindow C# GUI that communicates using Modbus TCP protocol.",

    // Experience
    "experience.educationLabel": "Academic Background",
    "experience.educationTitle": "Education",
    "experience.careerLabel": "Career Journey",
    "experience.careerTitle": "Experience",
    
    // Education
    "experience.bachelorDegree": "Bachelor's in Automation and Robotics",
    "experience.highSchool": "High School Diploma",
    
    // Experience items
    "experience.talentBoost.title": "Talent Boost Intern",
    "experience.talentBoost.company": "JAMK University of Applied Sciences",
    "experience.talentBoost.description": "Internship program focused on professional development and industry exposure in automation and robotics.",
    "experience.marketing.title": "Marketing Intern",
    "experience.marketing.company": "UMT Victor",
    "experience.marketing.description": "Contributed to marketing initiatives and gained experience in business operations.",
    "experience.hackathon.title": "Viitasaari Hackathon",
    "experience.hackathon.company": "Participant",
    "experience.hackathon.description": "Participated in hackathon events, collaborating on innovative solutions and technical challenges.",
    "experience.mediaClub.title": "Media Club & Teaching Assistant",
    "experience.mediaClub.company": "Deeper Life High School",
    "experience.mediaClub.description": "Active member of the Media Club and served as a Teaching Assistant, developing communication and leadership skills.",

    // Certifications
    "certifications.label": "Achievements",
    "certifications.title": "Certifications",

    // Contact
    "contact.label": "Get In Touch",
    "contact.title": "Let's Connect",
    "contact.description": "Interested in automation projects or collaboration opportunities? Feel free to reach out!",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.webCv": "Web CV",
    "contact.references": "References",
    "contact.yourName": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.yourMessage": "Your Message",
    "contact.sendMessage": "Send Message",

    // Footer
    "footer.builtWith": "Built with",
  },
  fi: {
    // Navigation
    "nav.about": "Tietoa",
    "nav.skills": "Taidot",
    "nav.projects": "Projektit",
    "nav.experience": "Kokemus",
    "nav.certifications": "Sertifikaatit",
    "nav.contact": "Yhteystiedot",
    "nav.downloadCv": "Lataa CV",

    // Hero
    "hero.title": "Automaatio- ja robotiikkatekniikan opiskelija",
    "hero.description": "Kolmannen vuoden automaatio-opiskelija, jolla on vahva kiinnostus PLC-ohjelmointiin, teollisuusautomaatioon ja robottijärjestelmiin. Innostunut innovatiivisista ja luovista lähestymistavoista teknisten haasteiden ratkaisemiseen.",
    "hero.getInTouch": "Ota yhteyttä",
    "hero.scrollToExplore": "Vieritä tutkiaksesi",

    // About
    "about.label": "Tietoa minusta",
    "about.title": "Profiilini",
    "about.description1": "Kolmannen vuoden automaatio-opiskelija, joka osaa",
    "about.description2": "ja opettelee parhaillaan",
    "about.description3": "-ympäristöä.",
    "about.description4": "Vahva ongelmanratkaisija ja tiimipelaaja, jolla on kokemusta mini-projekteista useiden tiedonsiirtoprotokollien parissa. Innostunut innovatiivisista ja luovista lähestymistavoista teknisten haasteiden ratkaisemiseen.",
    "about.languages": "Kielet",
    "about.englishFluent": "Englanti — Sujuva",
    "about.finnishBasic": "Suomi — Perus-keskitaso",
    "about.teamwork": "Tiimityö",
    "about.teamworkDesc": "Vahva yhteistyökyky",
    "about.problemSolving": "Ongelmanratkaisu",
    "about.problemSolvingDesc": "Analyyttinen ajattelija",
    "about.timeManagement": "Ajanhallinta",
    "about.timeManagementDesc": "Tehokas ja järjestelmällinen",
    "about.communication": "Viestintä",
    "about.communicationDesc": "Selkeä ja tehokas",
    "about.creativeThinking": "Luova ajattelu",
    "about.creativeThinkingDesc": "Innovatiiviset lähestymistavat",
    "about.attentionToDetail": "Tarkkuus",
    "about.attentionToDetailDesc": "Yksityiskohtiin keskittyvä",

    // Skills
    "skills.label": "Tekninen osaaminen",
    "skills.title": "Taidot ja pätevyydet",
    "skills.currentlyLearning": "Opiskelen parhaillaan",
    "skills.currentlyLearningDesc": "Laajentamassa osaamistani näillä alueilla",
    "skills.plcAutomation": "PLC ja automaatio",
    "skills.plcAutomationDesc": "Teollisuuden ohjausjärjestelmät ja ohjelmointi",
    "skills.engineeringTools": "Suunnittelutyökalut",
    "skills.engineeringToolsDesc": "Suunnittelu- ja simulointiohjelmistot",
    "skills.communicationProtocols": "Tiedonsiirtoprotokollat",
    "skills.communicationProtocolsDesc": "Teollisuusverkot ja tiedonvaihto",
    "skills.programmingIt": "Ohjelmointi ja IT",
    "skills.programmingItDesc": "Ohjelmistokehitys ja järjestelmät",
    "skills.processEngineering": "Prosessitekniikka",
    "skills.processEngineeringDesc": "Järjestelmäsuunnittelu ja analyysi",
    "skills.safetyStandards": "Turvallisuus ja standardit",
    "skills.safetyStandardsDesc": "Vaatimustenmukaisuus ja riskienhallinta",
    "skills.robotics": "Robotiikka",
    "skills.roboticsDesc": "Robottijärjestelmät ja analyysi",
    "skills.learning.opcua": "OPC UA",
    "skills.learning.machineVision": "Konenäkö",
    "skills.learning.industrialRobotics": "Teollisuusrobotiikka",
    "skills.learning.projectEconomics": "Insinööriprojektien talous",
    "skills.learning.stl": "PLC-ohjelmointi STL:llä",
    "skills.learning.twincat": "Beckhoff TwinCAT -ympäristö",
    "skills.learning.python": "Python-ohjelmointi",
    "skills.learning.valmetDna": "Valmet DNA -taidot",
    "skills.learning.pidTuning": "PID-säätömenetelmät",
    "skills.learning.mpc": "Malliprediktiivinen säätö",

    // Projects
    "projects.label": "Portfolio",
    "projects.academicTitle": "Akateemiset projektit",
    "projects.visualComponents": "Visual Components ja robotiikkaohjelmointi",
    "projects.personal": "Henkilökohtaiset oppimisprojektit",
    "projects.watchVideo": "Katso video",
    
    // Academic Projects
    "projects.pumpingModule.title": "Pumppausmoduulin PLC-ohjelma",
    "projects.pumpingModule.description": "Suunnittelin ja loin PLC-ohjelman pumppausmoduulille käyttäen on/off-venttiilejä, paine- ja lämpötila-antureita, AS-i-väyläviestintää, taajuusmuuttajia ja PID-säätimiä.",
    "projects.hmiScada.title": "HMI- ja SCADA-kehitys",
    "projects.hmiScada.description": "Rakensin HMI- ja SCADA-ohjelmia pumppausmoduulille WinCC:llä, tarjoten reaaliaikaisen valvonnan ja ohjausmahdollisuudet.",
    "projects.matlab.title": "MATLAB-prosessimallinnus",
    "projects.matlab.description": "Mallinsin prosessin MATLABissa, virittelin järjestelmän ja työskentelin suhdeohjauksen ja kaskadiohjauksen strategioiden parissa.",
    "projects.network.title": "Teollisuusverkon konfigurointi",
    "projects.network.description": "Rakensin ja konfiguroin verkkorakenteita virtuaaliympäristössä, mukaan lukien reititys, kytkentä, palomuurit ja IPv4/IPv6-osoitteet.",
    "projects.modbus.title": "Modbus TCP C#-sovellus",
    "projects.modbus.description": "Loin C# GUI-ohjelman, joka käyttää Modbus TCP -tiedonsiirtoprotokollaa teollisuuslaitteiden viestintään.",
    "projects.fieldDevice.title": "Kenttälaitteen suunnittelu",
    "projects.fieldDevice.description": "Valmistelin laiteluettelot prosessille, mukaan lukien kenttälaitteen suunnittelu ja dokumentointi, I/O-listat, johdotuskaaviot ja piirikaaviot.",
    "projects.valmetDna.title": "Valmet DNA",
    "projects.valmetDna.description": "Käytin Valmet DNA:ta luodakseni silmukkakaavioita veden pumppaamiseen säiliöiden välillä. Järjestelmä sisälsi PID-virityksen, kaskadi- ja suhdesäätörakenteet, turvalukkitukset, GSD-tiedoston tulkinnan, ACN I/O-moduulin konfiguroinnin sekä analogisen/digitaalisen signaalin skaalauksen ja datan muuntamisen.",
    
    // Visual Components Projects
    "projects.warehouse.title": "Varastosimulointia Visual Componentsilla",
    "projects.warehouse.description": "Suunnittelin ja mallinsin simuloidun varaston Visual Componentsissa, ohjelmoiden kaksi robottia suorittamaan lavaus- ja poimintaoperaatioita samalla integroiden turvajärjestelmiä ja -laitteita, ja määritellen varastointi-, lajittelu- ja kuljetusalueet prosessisolmujen avulla.",
    "projects.mir.title": "MIR-robotin perusohjelmointi",
    "projects.mir.description": "Ohjelmoin MIR-robotin kartoittamaan laboratorioympäristön, määritin turva- ja toiminta-alueet, paikansin latausasemat ja suoritin perusnavigointitehtäviä.",
    "projects.ur.title": "Universal Robotin perusohjelmointi",
    "projects.ur.description": "Ohjelmoin Universal Robotin käyttäen kameraperusteista näköpalautetta robotin suuntaamiseen ja ennalta määritettyjä asemia työkappaleen sijoittamiseksi määrätylle laudalle.",
    
    // Personal Projects
    "projects.eventLogger.title": "Tapahtumalokia TwinCATissa",
    "projects.eventLogger.description": "Kehitin tapahtumien lokitusjärjestelmän käyttäen Beckhoff TwinCATia ja STL-ohjelmointia.",
    "projects.objectSorting.title": "Esineiden lajittelujärjestelmä",
    "projects.objectSorting.description": "Perusesineiden lajittelu materiaalityypin perusteella TIA Portalilla (Simuloitu).",
    "projects.multiwindow.title": "Moni-ikkunainen C# Modbus-sovellus",
    "projects.multiwindow.description": "Moni-ikkunainen C# GUI, joka kommunikoi Modbus TCP -protokollan avulla.",

    // Experience
    "experience.educationLabel": "Akateeminen tausta",
    "experience.educationTitle": "Koulutus",
    "experience.careerLabel": "Urapolku",
    "experience.careerTitle": "Kokemus",
    
    // Education
    "experience.bachelorDegree": "Automaatio- ja robotiikkatekniikan kandidaatti",
    "experience.highSchool": "Lukion päättötodistus",
    
    // Experience items
    "experience.talentBoost.title": "Talent Boost -harjoittelija",
    "experience.talentBoost.company": "Jyväskylän ammattikorkeakoulu",
    "experience.talentBoost.description": "Harjoitteluohjelma keskittyen ammatilliseen kehitykseen ja teollisuuteen tutustumiseen automaation ja robotiikan alalla.",
    "experience.marketing.title": "Markkinointiharjoittelija",
    "experience.marketing.company": "UMT Victor",
    "experience.marketing.description": "Osallistuin markkinointi-aloitteisiin ja sain kokemusta liiketoiminnasta.",
    "experience.hackathon.title": "Viitasaari Hackathon",
    "experience.hackathon.company": "Osallistuja",
    "experience.hackathon.description": "Osallistuin hackathon-tapahtumiin, tehden yhteistyötä innovatiivisten ratkaisujen ja teknisten haasteiden parissa.",
    "experience.mediaClub.title": "Mediakerho ja opettajan avustaja",
    "experience.mediaClub.company": "Deeper Life High School",
    "experience.mediaClub.description": "Aktiivinen mediakerhon jäsen ja opettajan avustaja, kehittäen viestintä- ja johtamistaitoja.",

    // Certifications
    "certifications.label": "Saavutukset",
    "certifications.title": "Sertifikaatit",

    // Contact
    "contact.label": "Ota yhteyttä",
    "contact.title": "Pidetään yhteyttä",
    "contact.description": "Kiinnostunut automaatioprojekteista tai yhteistyömahdollisuuksista? Ota rohkeasti yhteyttä!",
    "contact.email": "Sähköposti",
    "contact.phone": "Puhelin",
    "contact.location": "Sijainti",
    "contact.webCv": "Web CV",
    "contact.references": "Suosittelijat",
    "contact.yourName": "Nimesi",
    "contact.yourEmail": "Sähköpostisi",
    "contact.yourMessage": "Viestisi",
    "contact.sendMessage": "Lähetä viesti",

    // Footer
    "footer.builtWith": "Rakennettu",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
