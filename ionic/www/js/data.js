
//array of screens
//most of the params are self explanatory
//keep your eye out for routes
var _globalFormConfig = [

    {
        processname: 'ITU Trauma Call',
        processdescription: 'Record an ITU trauma call.  ',
        processforms:
        [
        {
            formid: 'datetime',
            formtitle: 'Date and Time',
            previousformindex: null,
            controls: [
           { inputid: 'reviewdate', type: 'date', initialvalue: new Date(), label: 'Date of patient review', required: true },
           { inputid: 'reviewtime', type: 'time', initialvalue: new Date(), label: 'Time of patient review', required: true }]
        },
       {
           formid: 'activity',
           formtitle: 'Activity Type',
           previousformindex: null,
           controls: [
          {
              inputid: 'activitytype', type: 'radio', label: '', initialvalue: '', required: true, radios: [{ inputid: 'traumacall', placeholder: 'Trauma Call', initialvalue: false },
                                                                                                     { inputid: 'cardiacarrest', placeholder: 'Cardiac Arrest', initialvalue: false },
                                                                                                     { inputid: 'wardreferral', placeholder: 'Ward Referral', initialvalue: false }]
          }
           ]
       },
       {
           formid: 'patient',
           formtitle: 'Patient Details',
           previousformindex: null,
           controls: [
         { inputid: 'patienthospitalno', type: 'text', placeholder: 'XX1234', maxlength: 6, label: 'Hopsital No', required: true },
          { inputid: 'patientage', type: 'number', placeholder: 'age', label: 'Age', required: true, min: 0, max: 130 },
          {
              inputid: 'patientgender', type: 'radio', label: 'Gender', initialvalue: '', radios: [{ inputid: 'patientmale', placeholder: 'Male', initialvalue: false },
              { inputid: 'patientfemale', placeholder: 'Female', initialvalue: false }]
          },
          { inputid: 'patientsurname', type: 'text', label: 'Patient Surname', placeholder: 'Doe', required: false, maxlength: 100 },
          { inputid: 'patientforename', type: 'text', label: 'Patient Forename', placeholder: 'John', required: false, maxlength: 100 }
           ]
       },
        {
            formid: 'mechanism',
            formtitle: 'Mechanism',
            previousformindex: null,
            controls: [

           {
               inputid: 'mechanism', type: 'multicheckbox', label: '', checkBoxes: [{ inputid: 'rta', placeholder: 'RTA', initialvalue: false },
                                                                                          { inputid: 'fall', placeholder: 'Fall', initialvalue: false },
                                                                                          { inputid: 'penetratinginjury', placeholder: 'Penetrating Injury', initialvalue: false },
                                                                                          { inputid: 'burn', placeholder: 'Burn', initialvalue: false },
                                                                                          { inputid: 'crush', placeholder: 'Crush', initialvalue: false },
                                                                                          { inputid: 'assault', placeholder: 'Assault', initialvalue: false },
                                                                                          { inputid: 'drowning', placeholder: 'Drowning', initialvalue: false },
                                                                                          { inputid: 'hanging', placeholder: 'Hanging', initialvalue: false },
                                                                                          { inputid: 'other', placeholder: 'Other', initialvalue: false }
               ]
           }
            ]
        },
        {
            formid: 'maininjuries',
            formtitle: 'Main Injuries',
            previousformindex: null,
            controls: [
               {
                   inputid: 'maininjuries', type: 'multicheckbox', label: '',
                   checkBoxes: [{ inputid: 'head', placeholder: 'Head', initialvalue: false },
                                { inputid: 'face', placeholder: 'Face', initialvalue: false },
                                { inputid: 'neck', placeholder: 'Neck', initialvalue: false },
                                { inputid: 'chest', placeholder: 'Chest', initialvalue: false },
                                { inputid: 'abdo', placeholder: 'Abdo', initialvalue: false },
                                { inputid: 'pelvis', placeholder: 'Pelvis', initialvalue: false },
                                { inputid: 'limbs', placeholder: 'Limbs', initialvalue: false },
                                { inputid: 'skin', placeholder: 'Skin', initialvalue: false },
                                { inputid: 'softtissue', placeholder: 'Soft Tissue', initialvalue: false },
                                { inputid: 'none', placeholder: 'None', initialvalue: false }]
               }
            ]
        },
        {
            formid: 'GCS',
            formtitle: 'Glasgow Coma Score',
            previousformindex: null,
            controls: [
           { inputid: 'gcs', type: 'number', placeholder: '3-15', label: 'GCS on arrival', min: 3, max: 15, required: true }
            ]
        }
        ,
        {
            formid: 'primarysurvey',
            formtitle: 'Primary Survey',
            previousformindex: null,
            controls: [
             {
                 inputid: 'primarysurvey', type: 'radio', initialvalue: '', label: 'Were you required beyond primary survey?', radios: [{ inputid: 'primaryyes', placeholder: 'Yes', initialvalue: false },
                                                                                          { inputid: 'primaryno', placeholder: 'No', initialvalue: false, route: { condition: 'primaryno', toformid: 'finished' } }
                 ]
             }

            ]
        },
        {
            formid: 'intervention',
            formtitle: 'Intervention',
            previousformindex: null,
            controls: [
               {
                   inputid: 'intervention', type: 'multicheckbox', label: '',
                   checkBoxes: [{ inputid: 'monitoring', placeholder: 'Monitoring/Observation', initialvalue: false },
                                { inputid: 'intubationventilation', placeholder: 'Intubation/Ventilation', initialvalue: false },
                                { inputid: 'sedation', placeholder: 'Sedation', initialvalue: false },
                                { inputid: 'vadopressors', placeholder: 'Vasopressors/Intotropes', initialvalue: false },
                                { inputid: 'arterialline', placeholder: 'A Line', initialvalue: false },
                                { inputid: 'transferscan', placeholder: 'Transfer (to scan or other)', initialvalue: false }
                   ]
               }
            ]
        },
       {
           formid: 'transfer',
           formtitle: 'Patient Transfer',
           previousformindex: null,
           controls: [
          {
              inputid: 'transfertoothercentre', type: 'radio', initialvalue: '', label: 'Did you transfer the patient to another centre?', radios: [{ inputid: 'transferyes', placeholder: 'Yes', initialvalue: true, route: { condition: 'transferyes', toformid: 'transferinfo' } },
                                                                                                            { inputid: 'transferno', placeholder: 'No', initialvalue: false }]
          }
           ]
       },
        {
            formid: 'outcome',
            formtitle: 'Outcome',
            previousformindex: null,
            toformid: 'discussedwithconsultant',
            controls: [
               {
                   inputid: 'outcome', type: 'multicheckbox', label: 'Outcome',
                   checkBoxes: [{ inputid: 'aeward', placeholder: 'A+E/Ward', initialvalue: false },
                                { inputid: 'cametocritcalcare', placeholder: 'Came to critical care', initialvalue: false },
                                { inputid: 'palliation', placeholder: 'Palliation', initialvalue: false },
                                { inputid: 'theatre', placeholder: 'Theatre', initialvalue: false },
                                { inputid: 'angiosuite', placeholder: 'Angiosuite', initialvalue: false },
                                { inputid: 'died', placeholder: 'Died', initialvalue: false }
                   ]
               }

            ]
        },
        {
            formid: 'transferinfo',
            formtitle: 'Transfer Info',
            previousformindex: null,
            toformid: 'finished',
            controls: [
               {
                   inputid: 'whotransfered', type: 'radio', label: 'Who transferred the patient?', initialvalue: '',
                   radios: [{ inputid: 'criticalcare', placeholder: 'Critical Care', initialvalue: false },
                                { inputid: 'theatreanaesthetist', placeholder: 'Theatre Anaesthetist', initialvalue: false },
                                { inputid: 'other', placeholder: 'Other', initialvalue: false }
                   ]
               }
            ]
        },
        {
            formid: 'discussedwithconsultant',
            formtitle: 'Consultant Involvement',
            previousformindex: null,
            toformid: 'finished',
            controls: [
               {
                   inputid: 'consultantdiscussion', type: 'radio', label: 'Discussed with critical care consultant?', initialvalue: '',
                   radios: [{ inputid: 'consultantyes', placeholder: 'Yes', initialvalue: false },
                                { inputid: 'consultantno', placeholder: 'No', initialvalue: false }
                   ]
               }
            ]
        }
        ,
        {
            formid: 'finished',
            formtitle: 'Contact time',
            previousformindex: null,
            controls: [{ inputid: 'timespenthours', type: 'number', placeholder: 'HH', label: 'How long did you spend with the patient?', required: true, min: 0, max: 23 },
                       { inputid: 'timespentminutes', type: 'number', placeholder: 'MM', label: '', required: true, min: 0, max: 60 }
            ]
        }
        ]
    },
 {
     processname: 'Ward referral example form',
     processdescription: 'This is a test form to test multiple forms.  It doesn\'t do anything.',
     processforms:
     [
     {
     }
     ]
 }
];
