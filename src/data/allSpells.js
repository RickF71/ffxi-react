const allSpells = [
    {
        name:'Cure', 
        type:'healing',
        cost: 8,
        element: 'light',
        description: '',
        jobs: [
            {job1: 'WHM', Level:1 },
            {job1: 'RDM', Level:4 }
        ]
            
    },
    {
        name:'Dia', 
        description: 'Lowers an enemy\'s defense and gradually deals light elemental damage.',
        type:'enfeebling',
        cost: 7,
        element: 'light',
        jobs: [
            {job1: 'WHM', Level:3 },
            {job1: 'RDM', Level:1 }
        ]
            
    },
    {
        name:'Banish', 
        type:'divine',
        cost: 15,
        element: 'light',
        description: '',
        jobs: [
            {job1: 'WHM', Level:5 }
        ]
            
    },

    
  ];

  export default allSpells;