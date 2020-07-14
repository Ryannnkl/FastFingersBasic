const contentText = document.getElementById("contentText");
let countTrim = 0,
  vs = 1;
let countWords = 0;
const words = "contra|durante|pelo|programa|local|jogo|mil|do|José|duas|empresa|três|três|pelos|da|trabalho|sua|sul|já|estado|ou|exemplo|candidato|em|onde|qual|na|diz|reportagem|cerca|programa|país|anos|os|se|eles|outra|porque|isso|as|estado|porque|mês|tem|na|também|as|foi|dois|pode|desde|seu|pelos|nova|uma|preços|reportagem|vai|jogo|grande|processo|sul|será|seus|novo|mil|primeira|parte|primeiro|não|Brasil|com|outra|dias|país|se|editoria|editoria|folha|durante|sem|depois|ser|às|deve|mercado|pode|já|nada|antes|Paulo|há|tudo|dias|hoje|sobre|vai|disse|outro|Carlos|você|na|Brasil|acordo|a|uma|agora|governo|exemplo|rio|era|é|preços|aos|ontem|esporte|segundo|qual|em|dinheiro|mas|pessoas|maior|após|acordo|vez|eu|afirmou|nova|entre|têm|fazer|um|se|mesmo|final|vida|foram|nem|onde|vida|casa|como|plano|qualquer|ainda|seus|sistema|eu|ontem|ser|mas|têm|sempre|cada|pouco|mil|esta|qual|não|que|do|grupo|agora|qualquer|antes|qualquer|menos|até|estão|dois|de|ela|cada|de|sempre|governo|José|ela|especial|essa|esta|dia|empresas|tempo|faz|sistema|mundo|dinheiro|só|quatro|por|entre|sobre|seja|para|ao|não|seja|ainda|ele|suas|foram|menos|primeira|todo|outros|desde|assim|sendo|vai|todo|polícia|sobre|esse|tempo|tinha|das|parte|cada|José|por|podem|pela|essa|alguns|aos|governo|os|foi|são|plano|apenas|quando|pela|no|esse|ano|novo|dia|casa|nada|podem|trabalho|melhor|cidade|pessoas|grupo|novo|após|os|quatro|mais|há|o|nacional|plano|outro|me|milhões|caso|vida|pouco|folha|quatro|será|diz|outros|duas|em|pelo|real|porque|nem|disse|é|dos|parte|ao|Fernando|dia|mais|ele|número|página|à|empresa|brasileira|tem|número|todo|das|polícia|ainda|cotidiano|pessoas|primeiro|por|além|assim|faz|três|este|essa|pelo|lei|da|contra|está|duas|mesmo|partir|caso|mundo|estão|cerca|tudo|deve|rio|do|su".split(
  "|"
);

function randleWords(words = []) {
  words.map((word, index) => {
    if (countTrim % 4 === 0) {
      contentText.innerHTML += `<h4 class="word" id="w-${index}">${word}</h4><br/>`;
    }
    contentText.innerHTML += `<h4 class="word" id="w-${index}">${word}</h4>`;
  });
}

randleWords(words);

function handleKeyPress(e) {
  const input = document.getElementById("input");

  if (e.key === " ") {
    input.value = "";
    countTrim++;
    countWords++;
  }

  if (countTrim % 4 == 0) {
    for (let i = 0; i < countWords; i++) {
      const wordHidde = document.getElementById(`w-${i}`);
      wordHidde.hidden = true;
    }
    countTrim = 0;
  }
}
