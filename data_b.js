var INPUT_DATA = {
  api_version: '1.0',
  chart: {
    id: '1',
    name: 'Software BV',
    description: '',
    parent_id: '',
    staff_department: 'N',
    manager_id: 'B01',
    dataFields: [{ name: 'Location', value: '', type: 'text' }],
    children: [
      {
        id: '2',
        name: 'Office',
        description: '',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '01268004-f249-5d93-41e4-c23947f11a62',
            name: 'team 0',
            description: '',
            parent_id: '2',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: 'a798e6cf-0b58-067e-44ef-237f3b3b253a',
            name: 'team 1',
            description: '',
            parent_id: '2',
            staff_department: 'N',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '3',
        name: 'Communication',
        description: '',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B02',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '2b5f3900-b816-b42a-f272-b9ae0ca0ab83',
            name: 'comteam1',
            description: '',
            parent_id: '3',
            staff_department: 'N',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '4',
        name: 'Strategy & Sustainability',
        description: '',
        parent_id: '1',
        staff_department: 'Y',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [],
        showChildren: false
      },
      {
        id: '5',
        name: 'Desktop Development',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B01',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '5_1',
            name: 'Business customers',
            description: '',
            parent_id: '5',
            staff_department: 'N',
            manager_id: 'B02',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [
              {
                id: '5_1_0',
                name: 'Business Office',
                description: '',
                parent_id: '5_1',
                staff_department: 'Y',
                manager_id: 'B05',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              },
              {
                id: '5_1_1',
                name: 'Front end team',
                description: '',
                parent_id: '5_1',
                staff_department: 'N',
                manager_id: 'B02',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              },
              {
                id: '5_1_2',
                name: 'Back end team',
                description: '',
                parent_id: '5_1',
                staff_department: 'N',
                manager_id: 'B05',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              },
              {
                id: '5_1_3',
                name: 'Api team',
                description: '',
                parent_id: '5_1',
                staff_department: 'N',
                manager_id: 'B02',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [],
                showChildren: false
              }
            ],
            showChildren: false
          },
          {
            id: '5_2',
            name: 'Private Customer',
            description: '',
            parent_id: '5',
            staff_department: 'N',
            manager_id: 'B02',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '6',
        name: 'Mobile Development',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B05',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '6_1',
            name: 'Android',
            description: '',
            parent_id: '6',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '6_2',
            name: 'IOS',
            description:
              'The IOS department creates and maintains applications for Apple phones and tablets',
            parent_id: '6',
            staff_department: 'N',
            manager_id: 'B02',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '7',
        name: 'Web Development',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B05',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '7_1',
            name: 'IE troubleshooters',
            description: '',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B05',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7_2',
            name: 'Javascript kiddies',
            description: '',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7_3',
            name: 'Java masters',
            description: '',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B05',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '7_4',
            name: 'PHP people',
            description: '',
            parent_id: '7',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '9',
        name: 'Finance',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B03',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '9_1',
            name: 'Payments',
            description: '',
            parent_id: '9',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '9_2',
            name: 'Invoices',
            description: '',
            parent_id: '9',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '9_3',
            name: 'Incasso',
            description: '',
            parent_id: '9',
            staff_department: 'N',
            manager_id: 'B03',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '6_3',
            name: 'Other',
            description: '',
            parent_id: '9',
            staff_department: 'N',
            manager_id: 'B02',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [
              {
                id: 'e6d71ac8-39c2-c334-4323-0688c96311f1',
                name: 'new department type',
                description: '',
                parent_id: '6_3',
                staff_department: 'N',
                manager_id: 'B02',
                dataFields: [
                  { name: 'Location', value: '', type: 'text' }
                ],
                children: [
                  {
                    id: '09a54438-5ef2-2295-b019-b18b922ed741',
                    name: 'subsub',
                    description: '',
                    parent_id: 'e6d71ac8-39c2-c334-4323-0688c96311f1',
                    staff_department: 'N',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  },
                  {
                    id: '50a97250-a02f-20de-4749-89103c1e40e6',
                    name: 'safsf',
                    description: '',
                    parent_id: 'e6d71ac8-39c2-c334-4323-0688c96311f1',
                    staff_department: 'N',
                    dataFields: [
                      { name: 'Location', value: '', type: 'text' }
                    ],
                    children: [],
                    showChildren: false
                  }
                ],
                showChildren: false
              }
            ],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '10',
        name: 'Risk Management',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B05',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '10_1',
            name: 'Central Risk Management',
            description: '',
            parent_id: '10',
            staff_department: 'N',
            manager_id: 'B04',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '10_6',
            name: 'Operational Risk Management & Control',
            description: '',
            parent_id: '10',
            staff_department: 'N',
            manager_id: 'B05',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '11',
        name: 'Innovation & Technology',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B04',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '11_1',
            name: 'Innovation',
            description: '',
            parent_id: '11',
            staff_department: 'N',
            manager_id: 'B03',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '11_2',
            name: 'Technology',
            description: '',
            parent_id: '11',
            staff_department: 'N',
            manager_id: 'B03',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      },
      {
        id: '12',
        name: 'Human Resources',
        description: '',
        parent_id: '1',
        staff_department: 'N',
        manager_id: 'B05',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: '12_1',
            name: 'Transformation Team',
            description: '',
            parent_id: '12',
            staff_department: 'N',
            manager_id: 'B03',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: '12_2',
            name: 'Branding & Communications',
            description: '',
            parent_id: '12',
            staff_department: 'N',
            manager_id: 'B03',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: false
      }
    ],
    showChildren: true
  },
  people: [
    {
      id: 'B01',
      name: 'Big Boss',
      photo: 'B01',
      main_role: '',
      function: 'a',
      homepage: 'nu.nl',
      street: 'Kalverstraat 1',
      email: 'bigbos@someaddress.nl',
      phone: '0345-394930203',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: 'chief executive officer'
    },
    {
      id: 'B03',
      name: 'Mo Ney',
      photo: 'B03',
      main_role: '',
      function: '',
      homepage: 'linkedin.com',
      street: 'Vijzelstraat 143a',
      email: '',
      phone: '0345-394930204',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: 'CFO'
    },
    {
      id: 'B02',
      name: 'S. Talker',
      photo: 'B02',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Molenstraat 6',
      email: '',
      phone: '0345-394930205',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: 'HR'
    },
    {
      id: 'df',
      name: 'Big Boss1',
      photo: '',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Kerkwerg 15',
      email: '',
      phone: '0345-394930206',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: ''
    },
    {
      id: 'B05',
      name: 'Mr x',
      photo: 'B05',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Dorpstraat 9',
      email: 'MRX@somecomplany.mail',
      phone: '0345-394930207',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: ''
    },
    {
      id: 'B04',
      name: 'Mr y',
      photo: 'B04',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Stationslaan 88',
      email: '',
      phone: '0345-394930208',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: 'CIO'
    },
    {
      id: '44',
      name: 'michael',
      photo: '',
      main_role: '',
      function: 'web',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Het verdun 5',
      email: '',
      phone: '0345-394930209',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: ''
    },
    {
      name: 'asdfasdf',
      id: 'asdfasdf',
      manager: true,
      photo: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      street: '',
      functionName: '',
      homepage: ''
    },
    {
      name: 'asdfasdfasd',
      id: 'fasddfasdf',
      manager: true,
      photo: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      street: '',
      functionName: '',
      homepage: ''
    },
    {
      name: 'jantje',
      id: 'al;skdj;lasdjf',
      manager: false,
      photo: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      street: '',
      functionName: '',
      homepage: ''
    }
  ],
  assignments: [
    {
      department_id: '6_2',
      person_id: 'B02',
      role: 'senior developer',
      id: '8ffc8573-ea17-7dc4-368b-b84fac744b01'
    },
    {
      department_id: '6_2',
      person_id: 'B05',
      role: 'ux/ui designer',
      id: '0abd593d-b25b-fb1d-f246-8f6facabf1c3'
    },
    {
      department_id: '6_2',
      person_id: 'B03',
      role: 'scrum master',
      id: 'd0968813-3dae-9a6e-3080-04ce4cf0657c'
    },
    {
      department_id: '6_2',
      person_id: 'B02',
      role: 'tester',
      id: '49902507-6929-cfe1-92f0-d160177217aa'
    },
    {
      department_id: '6_2',
      person_id: 'B04',
      role: 'new tester',
      id: '7127c5d0-2484-bc21-88ee-f9fc9550bea4'
    },
    {
      department_id: '6_2',
      person_id: '44',
      role: 'tester',
      id: '29e35774-b182-1d16-cf53-8bd35446005d'
    },
    {
      department_id: '6_2',
      person_id: 'B01',
      role: 'strategy consultant',
      id: '752153b4-3edf-3bf0-7c7a-5d797c163617'
    },
    {
      department_id: '5',
      id: '32fd3535-0490-33d6-f544-b852eecafa3d',
      person_id: 'al;skdj;lasdjf',
      role: ''
    }
  ]
}
var UPDATED_ON = '26-07-2020'
