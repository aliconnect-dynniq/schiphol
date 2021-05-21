$().config({
  client_id: "3688555-73ff2ed0-1e53-4170-b6da-736532bb1b4f",
  info: {
    title: "Schiphol",
    description: ".",
    termsOfService: "https://schiphol.aliconnect.nl/terms/",
    contact: {
      email: "max.van.kampen@alicon.nl"
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    version: "1.0.0"
  },
  client: {
    servers: [
      {
        url: "https://schiphol.aliconnect.nl/api"
      }
    ]
  },
  menu: {
    Organisatie: {
      className: "crm",
      Contacts: {
        className: "contact",
        href: "Contact?$top=100"
      },
      Companies: {
        className: "company",
        href: "Company?$top=100"
      }
    },
    Tasks: {
      className: "task",
      Schakelberichten: {
        className: "task",
        href: "Schakelbericht"
      }
    },
    "System Engineering": {
      Equipment: {
        href: "Equipment?$top=100"
      }
    }
  },
  components: {
    schemas: {
      Location: {
        allOf: [
          "Enterprise"
        ],
        ID: "3688001",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095848",
            ItemID: "1011",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:42:55.007",
            LastModifiedDateTime: "2021-04-22 10:20:31.547",
            LastModifiedByID: null,
            Scope: null,
            Data: "3",
            schema: "Item",
            ID: "10",
            _ID: "1011"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055096",
            ItemID: "1011",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.537",
            LastModifiedDateTime: "2021-03-01 22:29:31.537",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "1011"
          }
        ]
      },
      Loc: {
        allOf: [
          "Enterprise"
        ],
        ID: "3688002",
        schema: "Item"
      },
      dms_System: {
        allOf: [
          "Enterprise"
        ],
        ID: "3688003",
        schema: "Item",
        HasChildren: [
          {
            AttributeName: "HasChildren",
            AttributeID: "3053946",
            ItemID: "4125",
            HostID: "3664251",
            UserID: null,
            NameID: 2026,
            ClassID: null,
            LinkID: null,
            Value: "1",
            CreatedDateTime: "2021-03-01 12:50:12.520",
            LastModifiedDateTime: null,
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: null,
            ID: null,
            _ID: "4125"
          }
        ],
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095849",
            ItemID: "4125",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:42:55.010",
            LastModifiedDateTime: "2021-04-22 10:20:31.550",
            LastModifiedByID: null,
            Scope: null,
            Data: "11",
            schema: "Item",
            ID: "10",
            _ID: "4125"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055100",
            ItemID: "4125",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.543",
            LastModifiedDateTime: "2021-03-01 22:29:31.543",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "4125"
          }
        ]
      },
      dms_Location: {
        allOf: [
          "Enterprise"
        ],
        ID: "3688004",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095850",
            ItemID: "4126",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:42:55.010",
            LastModifiedDateTime: "2021-04-22 10:20:31.550",
            LastModifiedByID: null,
            Scope: null,
            Data: "12",
            schema: "Item",
            ID: "10",
            _ID: "4126"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055102",
            ItemID: "4126",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.547",
            LastModifiedDateTime: "2021-03-01 22:29:31.547",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "4126"
          }
        ]
      },
      dms_Group: {
        allOf: [
          "Enterprise"
        ],
        ID: "3688005",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095851",
            ItemID: "4127",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:42:55.013",
            LastModifiedDateTime: "2021-04-22 10:20:31.550",
            LastModifiedByID: null,
            Scope: null,
            Data: "13",
            schema: "Item",
            ID: "10",
            _ID: "4127"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055088",
            ItemID: "4127",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.513",
            LastModifiedDateTime: "2021-03-25 10:42:55.017",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "4127"
          }
        ]
      },
      ProcessCell: {
        allOf: [
          "Item"
        ],
        color: "rgb(254,120,110)",
        ID: "3688006",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095856",
            ItemID: "4104",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:42:55.023",
            LastModifiedDateTime: "2021-04-22 10:20:31.550",
            LastModifiedByID: null,
            Scope: null,
            Data: "9",
            schema: "Item",
            ID: "10",
            _ID: "4104"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3095857",
            ItemID: "4104",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-25 09:42:55.027",
            LastModifiedDateTime: "2021-03-25 10:42:55.027",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "4104"
          }
        ]
      },
      Unit: {
        allOf: [
          "Item"
        ],
        color: "rgb(254,120,110)",
        ID: "3688007",
        schema: "Item",
        header0: [
          {
            AttributeName: "header0",
            AttributeID: "3095880",
            ItemID: "4103",
            HostID: "3664251",
            UserID: null,
            NameID: 2188,
            ClassID: null,
            LinkID: null,
            Value: "Unit",
            CreatedDateTime: "2021-03-25 09:47:37.877",
            LastModifiedDateTime: "2021-04-16 14:33:11.980",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: null,
            ID: null,
            _ID: "4103"
          }
        ],
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095858",
            ItemID: "4103",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:42:55.027",
            LastModifiedDateTime: "2021-04-22 10:20:31.553",
            LastModifiedByID: null,
            Scope: null,
            Data: "8",
            schema: "Item",
            ID: "10",
            _ID: "4103"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055082",
            ItemID: "4103",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.497",
            LastModifiedDateTime: "2021-03-25 10:42:55.030",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "4103"
          }
        ]
      },
      Equipment: {
        allOf: [
          "EquipmentModule"
        ],
        ID: "3688010",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095862",
            ItemID: "2107",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:46.313",
            LastModifiedDateTime: "2021-04-22 10:20:31.557",
            LastModifiedByID: null,
            Scope: null,
            Data: "15",
            schema: "Item",
            ID: "10",
            _ID: "2107"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055080",
            ItemID: "2107",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.493",
            LastModifiedDateTime: "2021-03-25 10:43:46.313",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "2107"
          }
        ]
      },
      System: {
        allOf: [
          "EquipmentModule"
        ],
        ID: "3688011",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095898",
            ItemID: "3683934",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 10:34:54.083",
            LastModifiedDateTime: "2021-04-22 10:20:31.557",
            LastModifiedByID: null,
            Scope: null,
            Data: "23",
            schema: "Item",
            ID: "10",
            _ID: "3683934"
          }
        ]
      },
      Product: {
        allOf: [
          "EquipmentModule"
        ],
        ID: "3688012",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095864",
            ItemID: "1060",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:51.097",
            LastModifiedDateTime: "2021-04-22 10:20:31.560",
            LastModifiedByID: null,
            Scope: null,
            Data: "14",
            schema: "Item",
            ID: "10",
            _ID: "1060"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055098",
            ItemID: "1060",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.540",
            LastModifiedDateTime: "2021-03-01 22:29:31.540",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "1060"
          }
        ]
      },
      Device: {
        allOf: [
          "EquipmentModule"
        ],
        ID: "3688013",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095865",
            ItemID: "1008",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:51.100",
            LastModifiedDateTime: "2021-04-22 10:20:31.560",
            LastModifiedByID: null,
            Scope: null,
            Data: "6",
            schema: "Item",
            ID: "10",
            _ID: "1008"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055094",
            ItemID: "1008",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.533",
            LastModifiedDateTime: "2021-03-01 22:29:31.533",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "1008"
          }
        ]
      },
      Control: {
        allOf: [
          "EquipmentModule"
        ],
        color: "rgb(255,153,0)",
        properties: {
          Value: {
            legend: "Control",
            title: "Value",
            idname: "value"
          },
          SignalType: {
            title: "Type",
            type: "select",
            options: {
              Text: {
                title: "String"
              },
              D: {
                title: "Digital",
                color: "blue"
              },
              A: {
                title: "Analog",
                color: "yellow"
              },
              Bool: {
                title: "Boolean"
              },
              SByte: {
                title: "Signed Byte"
              },
              UBbyte: {
                title: "Unsigned Byte"
              },
              SInt: {
                title: "Signed Integer"
              },
              Uint: {
                title: "Unsigned Integer"
              },
              SDInt: {
                title: "Signed Double Integer"
              },
              UDInt: {
                title: "Unsigned Double Integer"
              },
              Float: {
                title: "Float"
              },
              Double: {
                title: "Double"
              },
              Date: {
                title: "Date"
              },
              Time: {
                title: "Time"
              },
              Datetime: {
                title: "Date and time"
              },
              Array: {
                title: "Array"
              },
              Object: {
                title: "Object"
              },
              "": {
                title: "Not applicable"
              }
            }
          },
          Permission: {
            title: "Permission",
            type: "radio",
            options: {
              rw: "Read Write",
              r: "Read Only",
              w: "Write Only"
            }
          },
          Direction: {
            title: "Direction (vervalt)",
            type: "radio",
            options: {
              I: "Input",
              O: "Output"
            }
          },
          Quality: {
            title: "Quality",
            type: "radio",
            options: {
              Valid: {
                title: "Valid",
                color: "green"
              },
              NotValid: {
                title: "NotValid",
                color: "orange",
                CommunicationError: {
                  title: "CommunicationError",
                  color: "red"
                },
                UnInitialized: {
                  title: "UnInitialized",
                  color: "gray"
                }
              }
            }
          },
          ReadAddress: {
            legend: "Modbus",
            title: "Read Address",
            type: "number"
          },
          ReadAddressBit: {
            title: "Bit number",
            type: "number"
          },
          OID: {
            legend: "SNMP",
            title: "OID"
          },
          SNMPType: {
            title: "SNMP Type"
          },
          MinValidValue: {
            legend: "Range",
            title: "Min Valid Value",
            type: "number"
          },
          MaxValidValue: {
            title: "Max Valid Value",
            type: "number"
          },
          Deadband: {
            title: "Deadband",
            type: "number"
          },
          MinRawValue: {
            legend: "Conversion",
            title: "Min Raw Value",
            type: "number"
          },
          MaxRawValue: {
            title: "Max Raw Value",
            type: "number"
          },
          MinEngValue: {
            title: "Min Engineering Value",
            type: "number"
          },
          MaxEngValue: {
            title: "Max Engineering Value",
            type: "number"
          }
        },
        ID: "3688014",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095866",
            ItemID: "3678118",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:51.100",
            LastModifiedDateTime: "2021-04-22 10:20:31.560",
            LastModifiedByID: null,
            Scope: null,
            Data: "22",
            schema: "Item",
            ID: "10",
            _ID: "3678118"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055110",
            ItemID: "3678118",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.557",
            LastModifiedDateTime: "2021-03-01 22:29:31.557",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "3678118"
          }
        ]
      },
      ControlIO: {
        allOf: [
          "Control"
        ],
        ID: "3688015",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095867",
            ItemID: "4133",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:51.100",
            LastModifiedDateTime: "2021-04-22 10:20:31.560",
            LastModifiedByID: null,
            Scope: null,
            Data: "20",
            schema: "Item",
            ID: "10",
            _ID: "4133"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055090",
            ItemID: "4133",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.517",
            LastModifiedDateTime: "2021-03-01 22:29:31.517",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "4133"
          }
        ]
      },
      Attribute: {
        allOf: [
          "Item"
        ],
        header: [
          [
            "Tag",
            "Title"
          ],
          [
            "Tagname",
            "Name"
          ],
          [
            "AttributeType"
          ]
        ],
        properties: {
          Description: {
            title: "Description"
          },
          StateMessage: {
            title: "StateMessage"
          },
          Value: {
            title: "Value"
          },
          Quality: {
            title: "Quality",
            type: "radio",
            options: {
              Valid: {
                title: "Valid",
                color: "green"
              },
              NotValid: {
                title: "NotValid",
                color: "orange"
              },
              CommunicationError: {
                title: "CommunicationError",
                color: "red"
              },
              UnInitialized: {
                title: "UnInitialized",
                color: "gray"
              }
            }
          },
          AttributeType: {
            legend: "Type",
            title: "Attribute type",
            type: "select",
            options: {
              CriticalFailure: {
                title: "Critical Failure",
                color: "red"
              },
              NonCriticalFailure: {
                title: "Non Critical Failure",
                color: "orange"
              },
              Locking: {
                title: "Locking",
                color: "yellow"
              },
              Maintenance: {
                title: "Maintenance"
              },
              Running: {
                title: "Running",
                color: "green"
              },
              RunningMode: {
                title: "Running mode"
              },
              Security: {
                title: "Security"
              },
              PreWarning_1: {
                title: "Pre warning 1"
              },
              PreWarning_2: {
                title: "Pre warning 2"
              },
              PreWarning_3: {
                title: "Pre warning 3"
              },
              PreWarning_4: {
                title: "Pre warning 4"
              },
              PreWarning_5: {
                title: "Pre warning 5"
              },
              PreWarning_6: {
                title: "Pre warning 6"
              },
              PreWarning_7: {
                title: "Pre warning 7"
              },
              Measurement_1: {
                title: "Measurement 1"
              },
              Measurement_2: {
                title: "Measurement 2"
              },
              Measurement_3: {
                title: "Measurement 3"
              },
              Measurement_4: {
                title: "Measurement 4"
              },
              Measurement_5: {
                title: "Measurement 5"
              },
              Measurement_6: {
                title: "Measurement 6"
              },
              MeasurementErrorFlag: {
                title: "MeasurementErrorFlag"
              },
              NotApplicable: {
                title: "Not Applicable"
              }
            }
          },
          ValueType: {
            title: "Value type",
            type: "select",
            options: {
              text: {
                title: "String"
              },
              integer: {
                title: "Integer"
              },
              double: {
                title: "Double"
              },
              bool: {
                title: "Boolean"
              },
              date: {
                title: "Date"
              },
              time: {
                title: "Time"
              },
              datetime: {
                title: "Date and time"
              }
            }
          },
          Enum: {
            title: "Enummeration",
            type: "text"
          },
          Unit: {
            title: "Unit",
            type: "text"
          },
          Calc: {
            title: "Calculation function",
            type: "select",
            options: {
              OnlineHours: {
                title: "OnlineHours()"
              }
            }
          },
          Min: {
            legend: "Display",
            title: "Min",
            type: "number"
          },
          Max: {
            title: "Max",
            type: "number"
          },
          Step: {
            title: "Step",
            type: "number"
          },
          Optimum: {
            title: "Optimum",
            type: "number"
          },
          Low: {
            title: "Low",
            type: "number"
          },
          High: {
            title: "High",
            type: "number"
          },
          Hysteresis: {
            title: "Hysteresis",
            type: "number",
            step: 0.1
          }
        },
        ID: "3688016",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095868",
            ItemID: "1009",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:51.103",
            LastModifiedDateTime: "2021-04-22 10:20:31.563",
            LastModifiedByID: null,
            Scope: null,
            Data: "7",
            schema: "Item",
            ID: "10",
            _ID: "1009"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055074",
            ItemID: "1009",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.487",
            LastModifiedDateTime: "2021-03-31 10:40:24.810",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "1009"
          }
        ]
      },
      Schakelbericht: {
        allOf: [
          "Item"
        ],
        className: "task",
        header: [
          [
            "ContractorCompanyName",
            "WorkTitle"
          ],
          [],
          [
            "WorkDescription"
          ]
        ],
        properties: {
          State: {
            format: "select",
            filter: 1,
            options: {
              request: {
                title: "Aanvraag",
                color: "orange"
              },
              reject: {
                title: "Afgewezen",
                color: "black"
              },
              inBehandeling: {
                title: "In behandeling",
                color: "yellow"
              },
              scheduled: {
                title: "In de planning",
                color: "lightblue"
              },
              run: {
                title: "Actief",
                color: "green"
              },
              seitchedOff: {
                title: "Uitgeschakeld",
                color: "red"
              },
              hold: {
                title: "In de wacht",
                color: "blue"
              },
              finished: {
                title: "Afgerond",
                color: "white"
              }
            }
          },
          Station2: {
            options: {
              1: {
                title: "Station J2"
              },
              2: {
                title: "Station C"
              },
              3: {
                title: "Station H"
              }
            }
          },
          Master: {
            format: "hidden"
          },
          Fav: {
            type: "boolean",
            format: "hidden"
          },
          UserID: {
            type: "integer",
            format: "hidden"
          },
          Files: {
            legend: "Algemeen",
            format: "files"
          },
          View: {
            format: "sharecam"
          },
          ID: {
            type: "integer",
            readonly: true,
            disabled: true,
            title: "Schakelberichtnummer"
          },
          CreatedDateTime: {
            type: "datetime",
            placeholder: "Created",
            disabled: true
          },
          LastModifiedDateTime: {
            type: "datetime",
            placeholder: "Modfied",
            disabled: true
          },
          StartDateTime: {
            type: "datetime",
            placeholder: "Start",
            public: true
          },
          EndDateTime: {
            type: "datetime",
            placeholder: "Deadline",
            public: true
          },
          FinishDateTime: {
            type: "datetime",
            placeholder: "Gereed",
            public: true
          },
          Station1: {
            schema: "dms_Location",
            filter: "MasterId eq 3490364"
          },
          ContractorCompanyName: {
            filter: 1,
            legend: "Contractor",
            format: "text",
            schema: "Company"
          },
          ContractorContact: {
            format: "text",
            schema: "Contact"
          },
          ContractorEmail: {
            type: "string",
            format: "email",
            mailto: true
          },
          ContractorBusinessAddres: {
            format: "address"
          },
          ContractorOtherAddres: {
            format: "address"
          },
          WorkTitle: {
            legend: "Work",
            format: "text"
          },
          WorkDescription: {
            format: "html"
          },
          WotkLocations: {
            format: "address"
          },
          Station: {
            schema: "dms_Location",
            filter: "MasterId eq 3490364"
          },
          Uitschakelingen: {
            format: "radio",
            options: {
              1: {
                title: "Hoofdgroep"
              },
              2: {
                title: "SubgroepA"
              },
              3: {
                title: "SubgroepB"
              },
              4: {
                title: "SubgroepC"
              }
            },
            type: "array",
            defaultvalue: 23
          },
          UitschakelingenTwee: {
            type: "array",
            defaultvalue: "2,3",
            options: {
              1: {
                title: "Hoofdgroep"
              },
              2: {
                title: "SubgroepA"
              },
              3: {
                title: "SubgroepB"
              },
              4: {
                title: "SubgroepC"
              }
            }
          },
          Accepted: {
            legend: "Acceptance",
            format: "checkbox"
          },
          AcceptedComment: {
            format: "html"
          },
          VrijgaveVeiligstellen: {
            legend: "Release",
            format: "checkbox"
          },
          ArrivalDateTime: {
            format: "datetime"
          },
          WorkStarted: {
            legend: "WorkStart",
            format: "checkbox"
          },
          WorkStartSignature: {
            type: "image",
            format: "signature"
          },
          SwitchOff: {
            legend: "SwitchOff",
            format: "checkbox"
          },
          WorkFinished: {
            legend: "WorkActive",
            format: "checkbox"
          },
          WorkFinish: {
            type: "image",
            format: "signature"
          },
          SwitchOn: {
            legend: "SwitchOn",
            format: "checkbox"
          },
          Messages: {
            format: "hidden",
            schema: "Message",
            type: "array"
          }
        },
        ID: "3688017",
        schema: "Item",
        Master: [
          {
            AttributeName: "Master",
            AttributeID: "3095869",
            ItemID: "3673950",
            HostID: "3664251",
            UserID: null,
            NameID: 980,
            ClassID: null,
            LinkID: "10",
            Value: null,
            CreatedDateTime: "2021-03-25 09:43:51.103",
            LastModifiedDateTime: "2021-04-22 10:20:31.563",
            LastModifiedByID: null,
            Scope: null,
            Data: "21",
            schema: "Item",
            ID: "10",
            _ID: "3673950"
          }
        ],
        Src: [
          {
            AttributeName: "Src",
            AttributeID: "3055104",
            ItemID: "3673950",
            HostID: "3664251",
            UserID: null,
            NameID: 2173,
            ClassID: null,
            LinkID: "10",
            Value: "Item",
            CreatedDateTime: "2021-03-01 21:29:31.547",
            LastModifiedDateTime: "2021-03-31 10:40:24.843",
            LastModifiedByID: null,
            Scope: null,
            Data: null,
            schema: "Item",
            ID: "10",
            _ID: "3673950"
          }
        ]
      }
    }
  },
})
