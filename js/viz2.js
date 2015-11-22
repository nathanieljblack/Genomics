var diseaseDescriptionMap = {"LOA": "Leber’s hereditary optic neuropathy (LHON) or Leber optic atrophy is a mitochondrially inherited (transmitted from mother to offspring) degeneration of retinal ganglion cells (RGCs) and their axons that leads to an acute or subacute loss of central vision; this affects predominantly young adult males. However, LHON is only transmitted through the mother as it is primarily due to mutations in the mitochondrial (not nuclear) genome and only the egg contributes mitochondria to the embryo. LHON is usually due to one of three pathogenic mitochondrial DNA (mtDNA) point mutations. These mutations are at nucleotide positions 11778 G to A, 3460 G to A and 14484 T to C, respectively in the ND4, ND1 and ND6 subunit genes of complex I of the oxidative phosphorylation chain in mitochondria. Men cannot pass on the disease to their offspring. (source: Wikipedia)",
                            "BC": "Breast cancer is cancer that develops from breast tissue. Signs of breast cancer may include a lump in the breast, a change in breast shape, dimpling of the skin, fluid coming from the nipple, or a red scaly patch of skin. In those with distant spread of the disease, there may be bone pain, swollen lymph nodes, shortness of breath, or yellow skin. (source: Wikipedia)",
                            "NO": "Neoplasm is an abnormal growth of tissue, and when also forming a mass is commonly referred to as a tumor or tumour. In this case, the tumor is on the ovary. (source: Wikipedia)",
                            "BP": "Brain pseudoatrophy is an apparent decrease in volume of cortical tissue, seen by CT, due to changes in CSF production and alterations in the blood-brain barrier. (source: thefreedictionary.com)",
                            "PD": "Parkinson's disease (PD, also known as idiopathic or primary parkinsonism, hypokinetic rigid syndrome (HRS), or paralysis agitans) is a degenerative disorder of the central nervous system mainly affecting the motor system. The motor symptoms of Parkinson's disease result from the death of dopamine-generating cells in the substantia nigra, a region of the midbrain. The causes of this cell death are poorly understood. Early in the course of the disease, the most obvious symptoms are movement-related; these include shaking, rigidity, slowness of movement and difficulty with walking and gait. Later, thinking and behavioral problems may arise, with dementia commonly occurring in the advanced stages of the disease, and depression is the most common psychiatric symptom. (source: Wikipedia)",
                            "JM": "Juvenile myopathy is a presumed autoimmune dysfunction resulting in muscle weakness among other complications. It manifests itself in children; it is the pediatric counterpart of dermatomyositis. (source: Wikipedia)",
                            "LD": "Leigh's disease is a rare inherited neurometabolic disorder that affects the central nervous system. This progressive disorder begins in infants between the ages of three months and two years. Rarely, it occurs in teenagers and adults. Leigh's disease can be caused by mutations in mitochondrial DNA or by deficiencies of an enzyme called pyruvate dehydrogenase. Symptoms of Leigh's disease usually progress rapidly. The earliest signs may be poor sucking ability,and the loss of head control and motor skills. (source: NIH)",
                            "COD": "Cytochrome c oxidase deficiency is a genetic condition that can affect several parts of the body, including the muscles used for movement (skeletal muscles), the heart, the brain, or the liver. Signs and symptoms of cytochrome c oxidase deficiency usually begin before age 2 but can appear later in mildly affected individuals. (source: NIH)",
                            "CM": "Cardiomyopathy (literally 'heart muscle disease') is the measurable deterioration for any reason of the ability of the myocardium (the heart muscle) to contract, usually leading to heart failure. Common symptoms include dyspnea (breathlessness) and peripheral edema (swelling of the legs). Those with cardiomyopathy are often at risk of dangerous forms of irregular heart rate and sudden cardiac death. (source: Wikipedia)",
                            "SDM": "Sensorineural hearing loss (SNHL) is a type of hearing loss, or deafness, in which the root cause lies in the inner ear (cochlea and associated structures), vestibulocochlear nerve (cranial nerve VIII), or central auditory processing centers of the brain. SNHL accounts for about 90% of hearing loss reported. (source: Wikipedia)",
                            "HCM": "Hypertrophic cardiomyopathy (HCM) is a primary disease of the myocardium (the muscle of the heart) in which a portion of the myocardium is hypertrophied (thickened) without any obvious cause, creating functional impairment of the cardiac muscle. It is a leading cause of sudden cardiac death in young athletes. (source: Wikipedia)",
                            "DF": "A deaf person may be described as hard of hearing. A deaf person has little to no hearing. Deafness may occur in one or both ears. (source: Wikipedia)",
                            "SIDS": "Sudden infant death syndrome (SIDS), also known as cot death or crib death, is the sudden unexplained death of a child less than one year of age. It requires that the death remains unexplained even after a thorough autopsy and detailed death scene investigation. SIDS usually occurs during sleep. (source: Wikipedia)"
                            }
var LOA = [
  {
    "name": "Leber's Optic Atrophy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Leber's_hereditary_optic_neuropathy",
    "children": [
      {
        "name": "CYTB",
        "parent": "Leber's Optic Atrophy",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15257-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41518645"
          },
          {
            "name": "chrMT-15812-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200336777"
          },
          {
            "name": "chrMT-14831-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199795644"
          }
        ]
      },
      {
        "name": "ND1",
        "parent": "Leber's Optic Atrophy",
        "color": "#ff7f0e",
        "lightcolor": "#ffbb78",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND1",
        "children": [
          {
            "name": "chrMT-4216-C",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/1599988"
          },
          {
            "name": "chrMT-3394-C",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41460449"
          },
          {
            "name": "chrMT-4136-G",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476121"
          }]},
           {
          "name": "ND2",
          "parent": "Leber's Optic Atrophy",
          "color": "#2ca02c",
          "lightcolor": "#98df8a",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND2",
          "children": [
            {
              "name": "chrMT-4917-G",
              "parent": "ND2",
              "color": "#2ca02c",
              "lightcolor": "#98df8a",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/28357980"
            }
            ]},
            {
          "name": "ND3",
          "parent": "Leber's Optic Atrophy",
          "color": "#8c564b",
          "lightcolor": "#c49c94",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND3",
          "children": [
            {
              "name": "chrMT-10237-C",
              "parent": "ND3",
              "color": "#8c564b",
              "lightcolor": "#c49c94",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/193302927"
            }
            ]},
            {
          "name": "ND4",
          "parent": "Leber's Optic Atrophy",
          "color": "#e377c2",
          "lightcolor": "#f7b6d2",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
          "children": [
            {
              "name": "chrMT-11253-C",
              "parent": "ND4",
              "color": "#e377c2",
              "lightcolor": "#f7b6d2",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/200145866"
            }
            ]},
      {
        "name": "ND5",
        "parent": "Leber's Optic Atrophy",
        "color": "#9467bd",
        "lightcolor": "#c5b0d5",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND5",
        "children": [
          {
            "name": "chrMT-13708-A",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/28359178"
          },
          {
            "name": "chrMT-12811-C",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199974018"
          },
          {
            "name": "chrMT-12338-C",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/201863060"
          },
          {
            "name": "chrMT-13637-G",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200855215"
          }]},
          {
        "name": "COX3",
        "parent": "Leber's Optic Atrophy",
        "color": "#7f7f7f",
        "lightcolor": "#c7c7c7",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/COX-3",
        "children": [
          {
            "name": "chrMT-9438-A",
            "parent": "COX3",
            "color": "#7f7f7f",
            "lightcolor": "#c7c7c7",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/267606611"
          },
          {
            "name": "chrMT-9804-A",
            "parent": "COX3",
            "color": "#7f7f7f",
            "lightcolor": "#c7c7c7",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200613617"
          }]}
    ]
  }
];

var BC = [{
    "name": "Breast Cancer",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Breast_cancer",
    "children": [
      {
        "name": "CYTB",
        "parent": "Breast Cancer",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15326-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/2853508"
          },
          {
            "name": "chrMT-14905-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236203"
          },
          {
            "name": "chrMT-15553-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236189"
          },
          {
            "name": "chrMT-15323-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236177"
          },
          {
            "name": "chrMT-15758-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236193"
          },
          {
            "name": "chrMT-14783-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236042"
          },
          {
            "name": "chrMT-15301-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236045"
          },
          {
            "name": "chrMT-15784-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236194"
          },
          {
            "name": "chrMT-15001-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236169"
          },
          {
            "name": "chrMT-15355-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236181"
          },
          {
            "name": "chrMT-15346-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236180"
          },
          {
            "name": "chrMT-15458-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236185"
          },
          {
            "name": "chrMT-15226-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236174"
          },
          {
            "name": "chrMT-15470-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236187"
          },
          {
            "name": "chrMT-14968-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236167"
          },
          {
            "name": "chrMT-14935-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236204"
          },
          {
            "name": "chrMT-15049-T",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236170"
          },
          {
            "name": "chrMT-15287-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236044"
          },
          {
            "name": "chrMT-15682-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236192"
          },
          {
            "name": "chrMT-15289-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236175"
          }
        ]
      }
    ]
  }
];

var NO = [{
    "name": "Neoplasm of Ovary",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Neoplasm",
    "children": [
      {
        "name": "CYTB",
        "parent": "Neoplasm of Ovary",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15607-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236210"
          },
          {
            "name": "chrMT-15314-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236176"
          },
          {
            "name": "chrMT-15511-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236188"
          },
          {
            "name": "chrMT-15670-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236211"
          },
          {
            "name": "chrMT-15431-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236208"
          },
          {
            "name": "chrMT-15148-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236206"
          },
          {
            "name": "chrMT-15328-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236178"
          },
          {
            "name": "chrMT-15061-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236205"
          },
          {
            "name": "chrMT-15098-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236172"
          },
          {
            "name": "chrMT-14743-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236161"
          },
          {
            "name": "chrMT-15259-T",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236207"
          }
          ]
        }
        ]
      }
      ];

var BP = [{
    "name": "Brain Pseudoatrophy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "http://medical-dictionary.thefreedictionary.com/pseudoatrophy+of+brain",
    "children": [
      {
        "name": "ATP8",
        "parent": "Brain Pseudoatrophy",
        "color": "#d62728",
        "lightcolor": "#ff9896",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ATP8",
        "children": [
          {
            "name": "chrMT-8393-T",
            "parent": "ATP8",
            "color": "#d62728",
            "lightcolor": "#ff9896",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/121434446"
          }
          ]
        }
        ]
      }];
  
  var PD = [{
    "name": "Parkinson's Disease",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Parkinson's_disease",
    "children": [
      {
        "name": "ND3",
        "parent": "Parkinson's Disease",
        "color": "#8c564b",
        "lightcolor": "#c49c94",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND3",
        "children": [
          {
            "name": "chrMT-10398-G",
            "parent": "ND3",
            "color": "#8c564b",
            "lightcolor": "#c49c94",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/2853826"
          }
          ]
        }
        ]
      }];

  var JM = [{
    "name": "Juvenile Myopathy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Juvenile_dermatomyositis",
    "children": [
      {
        "name": "ND4",
        "parent": "Juvenile Myopathy",
        "color": "#e377c2",
        "lightcolor": "#f7b6d2",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
        "children": [
          {
            "name": "chrMT-11084-G",
            "parent": "ND4",
            "color": "#e377c2",
            "lightcolor": "#f7b6d2",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476113"
          }
          ]
        }
        ]
      }];

  var LD = [{
    "name": "Leigh's Disease",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Leigh_disease#/search",
    "children": [
      {
        "name": "ND4",
        "parent": "Leigh's Disease",
        "color": "#e377c2",
        "lightcolor": "#f7b6d2",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
        "children": [
          {
            "name": "chrMT-11984-C",
            "parent": "ND4",
            "color": "#e377c2",
            "lightcolor": "#f7b6d2",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200911567"
          }
          ]
        }
        ]
      }];

var COD = [{
    "name": "Cytochrome-c Oxidase Deficiency",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "http://ghr.nlm.nih.gov/condition/cytochrome-c-oxidase-deficiency",
    "children": [
      {
        "name": "COX1",
        "parent": "Cytochrome-c Oxidase Deficiency",
        "color": "#bcbd22",
        "lightcolor": "#dbdb8d",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/PTGS1",
        "children": [
          {
            "name": "chrMT-6480-A",
            "parent": "COX1",
            "color": "#bcbd22",
            "lightcolor": "#dbdb8d",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476128"
          }
          ]
        }
        ]
      }];

var CM = [{
    "name": "Cardiomyopathy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Cardiomyopathy",
    "children": [
      {
        "name": "Unknown",
        "parent": "Cardiomyopathy",
        "color": "#393b79",
        "lightcolor": "#6b6ecf",
        "type": "gene",
        "link": "",
        "children": [
          {
            "name": "chrMT-12192-A",
            "parent": "Unknown",
            "color": "#393b79",
            "lightcolor": "#6b6ecf",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/3134560"
          }
          ]
        }
        ]
      }];

var SDM = [{
    "name": "Sensorineural Deafness and Migraine",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Sensorineural_hearing_loss",
    "children": [
      {
        "name": "Unknown",
        "parent": "Sensorineural Deafness and Migraine",
        "color": "#393b79",
        "lightcolor": "#6b6ecf",
        "type": "gene",
        "link": "",
        "children": [
          {
            "name": "chrMT-4336-C",
            "parent": "Unknown",
            "color": "#393b79",
            "lightcolor": "#6b6ecf",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41456348"
          }
          ]
        }
        ]
      }];
var HCM = [{
    "name": "Hypertrophic Cardiomyopathy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Hypertrophic_cardiomyopathy",
    "children": [
      {
        "name": "Unknown",
        "parent": "Hypertrophic Cardiomyopathy",
        "color": "#393b79",
        "lightcolor": "#6b6ecf",
        "type": "gene",
        "link": "",
        "children": [
          {
            "name": "chrMT-4295-G",
            "parent": "Unknown",
            "color": "#393b79",
            "lightcolor": "#6b6ecf",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/121434467"
          }
          ]
        }
        ]
      }];

var SIDS = [{
    "name": "Sudden Infant Death Syndrome",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Sudden_infant_death_syndrome",
    "children": [
      {
        "name": "Unknown",
        "parent": "Sudden Infant Death Syndrome",
        "color": "#393b79",
        "lightcolor": "#6b6ecf",
        "type": "gene",
        "link": "",
        "children": [
          {
            "name": "chrMT-3290-C",
            "parent": "Unknown",
            "color": "#393b79",
            "lightcolor": "#6b6ecf",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199474665"
          }
          ]
        }
        ]
      }];

var OB= [{
    "name": "Obesity",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Obesity",
    "children": [
      {
        "name": "CYTB",
        "parent": "Obesity",
        "color": '#1f77b4',
        "lightcolor": '#aec7e8',
        "type": "gene",
        "link": "",
        "children": [
          {
            "name": "chrMT-15497-A",
            "parent": "CYTB",
            "color": '#1f77b4',
            "lightcolor": '#aec7e8',
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199951903"
          }
          ]
        }
        ]
      }];

var DF = [{
    "name": "Deafness",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Hearing_loss",
    "children": [
      {
        "name": "Unknown",
        "parent": "Deafness",
        "color": "#393b79",
        "lightcolor": "#6b6ecf",
        "type": "gene",
        "link": "",
        "children": [
          {
            "name": "chrMT-961-C,G",
            "parent": "Unknown",
            "color": "#393b79",
            "lightcolor": "#6b6ecf",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/3888511"
          },
          {
            "name": "chrMT-827-G",
            "parent": "Unknown",
            "color": "#393b79",
            "lightcolor": "#6b6ecf",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/28358569"
          }
          ]
        }
        ]
      }];

var selectedDisease = 'BC';
var root = BC[0];

var margin2 = {top: 20, right: 20, bottom: 30, left: 40},
    width2 = 960 - margin2.left - margin2.right,
    height2 = 500 - margin2.top - margin2.bottom;

var tooltip = d3.select('#viz2').append('div')
       .style('position','absolute') //To allow d3 to follow the position absolute to the relationship to the page
       .style('padding','0 10px') //To do padding on the toop tip. 0 on the top and bottom and 10px on each side
       .style('background','white')
       .style('opacity',0); // 0 as we don't want to show when the graphic first loads up

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width2], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height2, 0]);

var color = d3.scale.ordinal()
    .range(["#8a89a6", "#d0743c"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

var svg2 = d3.select("#viz2").append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

var fname = 'data/FIN.csv'

d3.csv(fname, function(error, data) {
  var categories = d3.keys(data[0]).filter(function(key) { return key !== "Disease" && key.indexOf('num') == -1; });
  var numbers = d3.keys(data[0]).filter(function(key) { return key.indexOf('num') != -1; });

  data.forEach(function(d) {
    d.percents = categories.map(function(name) { return {name: name, value: +d[name]}; });
    d.numbers = numbers.map(function(name) { tn = name.split('_')[0]; return {"num_name": tn, "num_value": +d[name]}; });
    arr = []
    for (var key in d.numbers) {
      nv = []
      n = d.numbers[key].num_name;
      for (var pkey in d.percents) {
        pn = d.percents[pkey].name;
        if (pn == n) {
          v = d.percents[pkey].value;
          nv.push(v);
          nv.push(d.numbers[key].num_value);
          arr.push({name: n, value: nv})
          break;
        }
      }
    }
    d.percents = arr;
  });

  x0.domain(data.map(function(d) { return d.Disease; }));
  x1.domain(categories).rangeRoundBands([0, x0.rangeBand()]);
  y.domain([0, d3.max(data, function(d) { return d3.max(d.percents, function(d) { return d.value[0]; }); })]);

  svg2.append("g")
      .attr("id", "xaxis2")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis);

  svg2.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr('class', 'y label')
      .attr("transform", "rotate(-90)")
      .attr("y", 2)
      .attr("dy", "0.75em")
      .style("text-anchor", "end")
      .style("font", "sans-serif")
      .style("font-size","12px")
      .text("Percentage of Group with Disease");

  var disease = svg2.selectAll(".disease")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x0(d.Disease) + ",0)"; })
      .on("click", function(d) {
         selectedDisease = d.Disease;
         var newData = eval(selectedDisease);
         document.getElementById("diseaseDesc").innerHTML = diseaseDescriptionMap[selectedDisease];
         root = newData[0];
         update(root);
         console.log(selectedDisease);
         document.location.href = "#viz3";
      });

  disease.selectAll("rect")
      .data(function(d) { return d.percents; })
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return x1(d.name); })
      .attr("y", function(d) { return y(d.value[0]); })
      .attr("height", function(d) { return height2 - y(d.value[0]); })
      .style("fill", function(d) { return color(d.name); })
      .on("mouseover", function(d) {
         tooltip.transition()
            .style('opacity', .9);
         tooltip.html(d.value[0] + "% of " + d.value[1])
            .style('left', (d3.event.pageX - 15) + 'px') //position of the tooltip
            .style('top', (d3.event.pageY - 20) + 'px');

         d3.select(this)
            .style('opacity',.5)
      })
      //To reset the color, hence opacity = 1
      .on('mouseout',function(d){
         tooltip.transition().style('opacity', 0)
         d3.select(this)
            .style('opacity',1)
      });

  d3.select('#xaxis2')
      .selectAll('.tick')
      .style("cursor","pointer")
      .on('click', function(d) {
         selectedDisease = d;
         var newData = eval(selectedDisease);
         document.getElementById("diseaseDesc").innerHTML = diseaseDescriptionMap[selectedDisease];
         root = newData[0];
         update(root);
         console.log(selectedDisease);
         document.location.href = "#viz3";
      });

  var legend = svg2.selectAll(".legend")
      .data(categories.slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width2 - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width2 - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

});

