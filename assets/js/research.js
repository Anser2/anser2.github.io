/*Research Details Table*/
const researchTable = document.querySelector(".main");

const research = [
  {
    title: "IceWatch: An Early Warning System for Glacier Lake Outburst Flooding (GLOFs), A Deep Learning Approach (//In Progress)",
    authors:
      "Anser Sohaib, Muhammad Talha, Zuha Fatima",
    conferences:
      "It is research project and also my final year project (In Progress). Yet to be published.",
    researchYr: 2024-2025,
    citebox: "popup2",
    image: "assets/images/research-page/glof.png",
    citation: {
      vancouver:
        "Nazia Perwaiz, Ayesha Kanwal, Anser Sohaib, Muhammad Talha, Zuha Fatima, 'IceWatch: An Early Warning System for Glacier Lake Outburst Flooding (GLOFs), a Deep Learning Approach', 2024-2025, In Progress.",
    },
    abstract:
      "Ice watch is a GLOF(Glacial Lake Outburst Flood) prediction system based on deep learning utilizing satellite imagery data from sentinel 1, sentinel 2 and Landsat. The machine learning model will be trained using datasets containing velocity mosaics, image pair velocities and elevation change over mountain ranges from 1982 till 2022. Convolutional Neural Network(CNN) and LSTM will be combined to develop an efficient flood prediction system that will give an early warning before an incoming GLOF on a user friendly web interface.",
    absbox: "absPopup2",
  },

  {
    title: "Vibrational Analysis of Rotating Shaft of DC/Induction Motor",
    authors:
      "Anser Sohaib, Zuha Fatima, Muhammad Ali",
    conferences:
      "It was my semester project for the course of Electrical Machines.",
    researchYr: 2023,
    citebox: "Read this paper here: https://drive.google.com/file/d/18JJWhO0uYFcBAmh5fut6P8AmUGbaYDJw/view?usp=sharing",
    image: "assets/images/research-page/rm.png",
    citation: {
      vancouver:
        "Nazia Perwaiz, Ayesha Kanwal, Anser Sohaib, Muhammad Talha, Zuha Fatima, 'IceWatch: An Early Warning System for Glacier Lake Outburst Flooding (GLOFs), a Deep Learning Approach', 2024-2025, In Progress.",
    },
    abstract:
      " Fault detection in rotating machinery is critical for preventing production downtimes. This project presents a dataset for unbalance detection in a rotating shaft using vibration sensors. Machine learning algorithms convolutional neural networks and Fast Fourier Network were applied to analyze the dataset. The best results were achieved using a Convolution Neural Network with a prediction accuracy of 97.2% on the evaluation dataset while Fast Fourier Transform gave maximum accuracy of 84 %.",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
