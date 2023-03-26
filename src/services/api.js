import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const isProd = false

const url = isProd ? "https://green-login-service.azurewebsites.net" : "http://localhost:5000";

const usegeInfoUrl = isProd ? "https://green-login-service.azurewebsites.net" : "http://localhost:5000";

// const islocal = window.location.href.includes('localhost')
// const islocal = false

const mockData = {
    data: {
        "Chemical": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["26", "24", "28", "27", "25"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["109", "90", "104", "117", "121", "119", "123", "141", "136", "127", "128", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["380", "340", "420", "460"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["1470", "1410", "1270", "1340", "1510"]
            }
        },
        "Energy": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["26", "24", "18", "18", "18"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["109", "90", "104", "117", "121", "119", "123", "141", "136", "127", "128", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["380", "340", "420", "460"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["1470", "1410", "1270", "1340", "1510"]
            }
        },
        "Fabric": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["11", "14", "8", "13", "15"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["49", "35", "46", "56", "53", "58", "62", "71", "74", "67", "65", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["130", "185", "235", "280"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["820", "780", "630", "710", "850"]
            }
        },
        "Raw Materials": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["1.2", "1.3", "2.1", "1.9", "1.5"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["4.2", "4", "4.8", "5.4", "6.6", "5.9", "6.2", "7.9", "7.8", "7.2", "6.9", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["19", "24", "27", "32"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["86", "63", "75", "82", "91"]
            }
        },
        "Water": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["26", "24", "28", "27", "25"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["109", "90", "104", "117", "121", "119", "123", "141", "136", "127", "128", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["380", "340", "420", "460"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["1470", "1410", "1270", "1340", "1510"]
            }
        }
    }
}

export const loginApi = (data) => isProd ? axios.post(`${url}/login/authenticate`, data) : axios.post(`${url}/authenticate`, { data, success: true });

export const registerApi = (data) => isProd ? axios.post(`${url}/login/signup`, data) : axios.post(`${url}/signup`, { data, success: true, evergreenId: "SusmitoB" });

// export const usageApi = (data) => isProd ? axios.post(`${usegeInfoUrl}/companyinfo/usage`, data) : axios.post(`${usegeInfoUrl}/usage`, { data: mockData, "success": true, evergreenId: "SusmitoB" });


const itemdata = {
    "success": true,
    "data": {
        "Chemical": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["26", "24", "28", "27", "25"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["109", "90", "104", "117", "121", "119", "123", "141", "136", "127", "128", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["380", "340", "420", "460"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["1470", "1410", "1270", "1340", "1510"]
            }
        },
        "Energy": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["26", "24", "18", "18", "18"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["109", "90", "104", "117", "121", "119", "123", "141", "136", "127", "128", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["380", "340", "420", "460"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["1470", "1410", "1270", "1340", "1510"]
            }
        },
        "Fabric": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["11", "14", "8", "13", "15"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["49", "35", "46", "56", "53", "58", "62", "71", "74", "67", "65", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["130", "185", "235", "280"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["820", "780", "630", "710", "850"]
            }
        },
        "Raw Materials": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["1.2", "1.3", "2.1", "1.9", "1.5"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["4.2", "4", "4.8", "5.4", "6.6", "5.9", "6.2", "7.9", "7.8", "7.2", "6.9", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["19", "24", "27", "32"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["86", "63", "75", "82", "91"]
            }
        },
        "Water": {
            "weekly": {
                "label": ["WEEK_1", "WEEK_2", "WEEK_3", "WEEK_4", "WEEK_5"],
                "data": ["26", "24", "28", "27", "25"]
            },
            "monthly": {
                "label": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                "data": ["109", "90", "104", "117", "121", "119", "123", "141", "136", "127", "128", "113"]
            },
            "quarterly": {
                "label": ["Q1", "Q2", "Q3", "Q4"],
                "data": ["380", "340", "420", "460"]
            },
            "yearly": {
                "label": ["YEAR_2018", "YEAR_2019", "YEAR_2020", "YEAR_2021", "YEAR_2022"],
                "data": ["1470", "1410", "1270", "1340", "1510"]
            }
        }
    }
}

export const usageApi = (data) => isProd ? axios.post(`${usegeInfoUrl}/companyinfo/usage`, data) : axios.post(`${usegeInfoUrl}/usage`, { data: itemdata });