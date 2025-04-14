import React from "react";

function MostEventsDepartments() {
  const skillDayData = [
    {
      skillDayId: "c63904d9-5129-4418-a07b-ae3d59fc3705",
      name: "SkillDay: Terrengsykling",
      responsibleId: "780e20f8-3393-4e7e-94c7-4ff714dada37",
      department: "JAVA",
      eventIds: [
        "37659ba4-0f4a-4fb5-a76d-588bfdee1986",
        "07840b21-8b2e-49b2-99f1-4e1bc65b58ad",
      ],
    },
    {
      skillDayId: "b7b5fc68-8267-40de-a007-d883dc112a03",
      name: "SkillDay: Bordtennis",
      responsibleId: "7e8024a5-4b73-4b77-a27e-c66b9b041277",
      department: "JAVA",
      eventIds: [],
    },
    {
      skillDayId: "425213fe-8d55-4fc6-9aa8-3df7a2f78f49",
      name: "SkillDay: Rytter",
      responsibleId: "6735a525-7ed5-4ed1-829b-5e33c3124ce1",
      department: "JAVA",
      eventIds: [
        "6d62483b-aa5c-461f-bf1a-2d5e5e3c489d",
        "f3a3314e-a4fc-4fcc-97e9-b7c35330f04c",
        "73469058-13b5-480a-afc5-1bd657bb1ff5",
        "d18a568e-4529-49e9-8333-6a1dcdb493ee",
        "59b81267-907e-45d0-9ed1-637637b54cab",
      ],
    },
    {
      skillDayId: "d7b259a9-a713-4d3e-ab99-5a7962d8655f",
      name: "SkillDay: Maratonsvømming",
      responsibleId: "6684a409-71be-4415-b221-ebee0667b6e0",
      department: "MICROSOFT",
      eventIds: ["d6943a80-5c39-4583-92b5-16627957fef3"],
    },
    {
      skillDayId: "addc06d6-0b37-4a88-b861-0582d9e62d00",
      name: "SkillDay: Taekwondo",
      responsibleId: "56a1bbb0-a096-4fba-ad1b-245d63daac37",
      department: "JAVA",
      eventIds: [
        "056d1854-79dd-4c58-8bb3-61fb69a3af3f",
        "ed574cd0-8607-41c2-9f06-eadda5ab6e48",
        "bf354969-58f0-44d9-aa9c-c00d1e00434d",
      ],
    },
    {
      skillDayId: "c4541f82-d18f-44cd-9c4b-8fcaa274785a",
      name: "SkillDay: Fekting",
      responsibleId: "cb88041e-a34e-4c0f-b375-66e60287261b",
      department: "UX",
      eventIds: ["252faa71-7124-46de-a4cb-0991cbf0e716"],
    },
    {
      skillDayId: "4504080d-6532-4888-a08d-5f0b0f68112a",
      name: "SkillDay: Sportsklatring",
      responsibleId: "8b354640-6247-442c-84e5-d4779f89f322",
      department: "JAVA",
      eventIds: [],
    },
    {
      skillDayId: "5b42228f-3a54-4651-b417-c4287dba47ca",
      name: "SkillDay: Rugby",
      responsibleId: "f58825e5-6765-47f7-beb7-d8183313945a",
      department: "MICROSOFT",
      eventIds: [
        "1ff1801b-fbfe-4505-864f-0cf3e18d80f3",
        "be56191c-001c-4308-ad2d-8b71880110ff",
      ],
    },
    {
      skillDayId: "fa175f37-a78e-450e-8173-75c7f9203999",
      name: "SkillDay: Softball",
      responsibleId: "5b984b52-821b-486d-9fdc-0000710225b7",
      department: "JAVA",
      eventIds: ["8df37270-f605-482f-842b-933388e79bfc"],
    },
    {
      skillDayId: "08745bf6-1a56-44ac-9886-5e4d2641e92f",
      name: "SkillDay: BMX racing",
      responsibleId: "eb913095-b15e-405e-b638-3b5f78f2e980",
      department: "JAVA",
      eventIds: [],
    },
    {
      skillDayId: "9970f2ff-0ee0-4a57-bbe8-cdb71accfbe1",
      name: "SkillDay: Svømming",
      responsibleId: "a4535920-3a97-4117-9692-65e02f56b21a",
      department: "MICROSOFT",
      eventIds: ["ce3ae13a-1277-40ce-85b8-9c5bd31688d1"],
    },
    {
      skillDayId: "b4a81919-4b53-4ae6-afce-0b42a661bf86",
      name: "SkillDay: Seiling",
      responsibleId: "77439bd9-cf50-4a5d-a7af-aa1fd056ea35",
      department: "JAVA",
      eventIds: [],
    },
    {
      skillDayId: "b94ae26e-4a2e-4829-8795-6c2664c7a06f",
      name: "SkillDay: Bueskyting",
      responsibleId: "56722d32-a7cc-45c1-b5db-a13d66dace75",
      department: "MICROSOFT",
      eventIds: [
        "af52537a-7741-442e-8e31-237d4b236109",
        "f3efdc30-cf4a-4aa3-9133-8d6aa4f8f39e",
      ],
    },
    {
      skillDayId: "2ac83df1-e7d6-4641-8d34-199128329972",
      name: "SkillDay: Volleyball",
      responsibleId: "5bd24325-913a-48e3-8761-fedf0a19ebab",
      department: "MICROSOFT",
      eventIds: [],
    },
    {
      skillDayId: "7dd78cce-b8ae-4c24-95d0-2757cd6549e2",
      name: "SkillDay: Tennis",
      responsibleId: "48d62532-9c59-48a8-8671-7872f4ac2823",
      department: "MICROSOFT",
      eventIds: ["7b024384-b35b-4524-9636-46ac2760df25"],
    },
    {
      skillDayId: "8bed78d2-6a52-4d11-85a4-c5fb4011f56a",
      name: "SkillDay: Sandvolleyball",
      responsibleId: "eebff8bf-d4a3-4b44-a674-1a09224c9f35",
      department: "MICROSOFT",
      eventIds: ["9e5ce7df-b6f1-4759-8651-fe6b3f3abc54"],
    },
    {
      skillDayId: "52c4a52a-9548-4d33-9189-2bf9ff02fab3",
      name: "SkillDay: Judo",
      responsibleId: "0cfc7a3e-be26-47d2-a33c-16528ff77138",
      department: "UX",
      eventIds: [
        "3a077fc6-c187-47b7-9646-36278fa347e4",
        "78d3539f-e94a-4b99-815b-1ab2cce14c80",
        "2c2e4be5-3ce8-4a8f-ad34-8a16a5bed4d9",
        "ed8fbcfa-f9ee-4559-b452-13c3c33aea49",
        "7bdd355a-60be-4baf-bcc8-91fedeca0e03",
      ],
    },
    {
      skillDayId: "ee83704a-19ab-40b8-bc4e-b703f9c1e698",
      name: "SkillDay: Triatlon",
      responsibleId: "eb913095-b15e-405e-b638-3b5f78f2e980",
      department: "JAVA",
      eventIds: [
        "2433eaa8-b875-40cf-a96e-926483910f1e",
        "29bb07c3-26e1-41b2-bfda-e30006c2aec5",
      ],
    },
    {
      skillDayId: "dad8b7b9-9943-45cb-8891-79b6e460d0ef",
      name: "SkillDay: Håndball",
      responsibleId: "48153ac1-6802-4ee1-8ae3-e1e136b20640",
      department: "MICROSOFT",
      eventIds: ["b2c3b0d1-4b15-4c03-989e-f6a206e21419"],
    },
    {
      skillDayId: "e573bc19-2ff6-453b-9260-9a54f3b01bfc",
      name: "SkillDay: Flattvannspadling",
      responsibleId: "954ca006-3318-4209-ac32-2b5b985252c5",
      department: "JAVA",
      eventIds: [
        "42479439-023f-4a3a-8b01-05487f2bd6fe",
        "13957ee5-f9e5-43d4-b880-ff82d0072ed9",
        "7639b6e0-1361-4f88-9d17-a44a41fa0415",
        "6ef9f8e9-76a0-4797-8568-c1ac1b18db28",
        "86f7fcd8-5f80-4166-afc1-a76fa393afc4",
      ],
    },
    {
      skillDayId: "4e6695b6-21e7-4bf6-9e5e-1c67622b8a22",
      name: "SkillDay: Skyting",
      responsibleId: "c606c1d6-39f8-4fea-9279-82740f31d644",
      department: "JAVA",
      eventIds: [],
    },
    {
      skillDayId: "d8fe0c0d-cf74-4a42-be3f-6d5b70c4217f",
      name: "SkillDay: Hockey",
      responsibleId: "5530c64e-b424-404a-9f16-6aec2405a32e",
      department: "MICROSOFT",
      eventIds: [
        "a72bd4e8-d139-4595-aba9-e7412538f735",
        "cd638190-63d7-44ae-8d37-fc513001f487",
      ],
    },
    {
      skillDayId: "95d43ebf-1d3b-4dd3-a181-ac95f0d1c4b1",
      name: "SkillDay: Friidrett",
      responsibleId: "3cdc18ec-fe97-41f8-b934-7a5a3a1bbeea",
      department: "JAVA",
      eventIds: [],
    },
    {
      skillDayId: "df461e52-12bd-4e86-b546-db1d37156ec8",
      name: "SkillDay: Baseball",
      responsibleId: "b66126b3-988c-419b-8966-6fe652c5cfd8",
      department: "UX",
      eventIds: ["c52d2ca3-78ab-4da1-9676-da5cd252ed06"],
    },
    {
      skillDayId: "a093f1ee-781a-49ba-97d3-4af0c251d498",
      name: "SkillDay: Trampoline",
      responsibleId: "5863751b-812b-4e90-ad4e-41958a2009a0",
      department: "UX",
      eventIds: [
        "bd841537-ddb0-4468-93a7-7d115609d35a",
        "5c38b2df-1500-4c91-998f-d09b8606bb51",
      ],
    },
    {
      skillDayId: "f6d23d26-bfdd-4169-aada-e77c5393860b",
      name: "SkillDay: Surfing",
      responsibleId: "fe2ff8ec-3601-46fd-b41a-d14664b7c16b",
      department: "JAVA",
      eventIds: [
        "8a592c5c-2517-4af0-873c-80374c893cff",
        "9ba738ac-6178-4b2a-8caf-5ea3ba63667b",
        "0f6c3551-d429-402d-b4fa-e587d3b9cd10",
        "17803ee3-88d4-4bb1-a0a6-d177fe0bee5c",
        "82080b8c-a282-4e4d-9b0c-81a3eb534010",
      ],
    },
    {
      skillDayId: "ad0888d9-cb87-4004-bd31-252d50a1793c",
      name: "SkillDay: Vektløfting",
      responsibleId: "77439bd9-cf50-4a5d-a7af-aa1fd056ea35",
      department: "JAVA",
      eventIds: [
        "7754ede5-5e7f-4ce5-b945-01ecaecf8b3c",
        "8ffacb73-bc7f-441d-95fc-9255309e54ba",
      ],
    },
    {
      skillDayId: "c6b1bcbb-1863-4cf4-b41f-29150af5d65c",
      name: "SkillDay: Rytmisk gymnastikk",
      responsibleId: "aac0ad9b-227a-4783-a3ef-edd9b57a1018",
      department: "UX",
      eventIds: [
        "1b14960b-cecf-48a1-88be-e2cbe0959aad",
        "012c0f18-6bd8-4904-b368-08168c976fa9",
        "b77f5c0b-87e1-4e6c-b450-064896019060",
      ],
    },
    {
      skillDayId: "fe88ff55-800e-4273-90fc-012e402497a8",
      name: "SkillDay: Karate",
      responsibleId: "f44ddbff-f8f4-4c88-b206-2d62517ac7a6",
      department: "MICROSOFT",
      eventIds: [],
    },
    {
      skillDayId: "bc2bc083-b725-4c91-8974-f17a7fd4941c",
      name: "SkillDay: Banesykling",
      responsibleId: "152a337f-4f70-4636-9b97-4183a74f4c78",
      department: "MICROSOFT",
      eventIds: [
        "ce835b0b-37fb-42c2-92b0-3682f5163598",
        "f870de1a-6868-48c9-b382-287188cd2a2b",
      ],
    },
  ];
  // getting most events in departments
  const eventCountByDepartment = skillDayData.reduce((acc, skillDay) => {
    const { department, eventIds } = skillDay;
    if (acc[department]) {
      acc[department] += eventIds.length;
    } else {
      acc[department] = eventIds.length;
    }
    return acc;
  }, {});

  let maxDepartment = "";
  let maxEvents = 0;

  for (const [department, count] of Object.entries(eventCountByDepartment)) {
    if (count > maxEvents) {
      maxEvents = count;
      maxDepartment = department;
    }
  }

  return (
    <div>
      <h1>Most Events by Department</h1>
      <p>
        Department with most events: <strong>{maxDepartment}</strong> with{" "}
        <strong>{maxEvents}</strong> events.
      </p>
    </div>
  );
}

export default MostEventsDepartments;
