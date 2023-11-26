
    function SlideRemove() {
      ch.classList.remove("slide");
      ci.classList.remove("slide_intro");
      bp.classList.remove("slide_big");
    }

    function WoL() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Warrior of Light`;

      intro_hero.innerHTML = `<span>O Guerreiro da Luz, também conhecido como Aventureiro, é o personagem criado pelo jogador em Final Fantasy XIV que atua como protagonista. Warrior of Light é um termo recorrente na série Final Fantasy desde o Final Fantasy original, referindo-se ao personagem do jogador.
      <br>
      O personagem do jogador é um aventureiro em Eorzea durante a Sétima Era Umbral que se junta a uma das três Grandes Companhias e se torna um membro-chave dos Scions of the Seventh Dawn. O Guerreiro da Luz pode ser uma das oito raças principais de Eorzea: Hyur, Miqo'te, Roegadyn, Lalafell, Elezen, Au Ra, Viera ou Hrothgar. Nas cenas em CG e na maioria dos trailers do jogo, um jovem Midlander Hyur representa o Guerreiro da Luz.</span>`;

      img_hero.innerHTML = `<img src="imagens/WoL_big.png">`;
    }

    function Thancred() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Thancred`;

      intro_hero.innerHTML = `<span>Classe: Gunbreaker (Tank) <br> Thancred Waters é um homem inteligente, de fala mansa e que gosta de mulheres, embora fique nervoso quando Minfilia Warde aponta alguns dos elementos mais sombrios de seu passado, mesmo como um elogio. Thancred é dedicado a Minfilia e a vê como uma amiga próxima, semelhante a uma irmã. Após a Calamidade, Thancred tornou-se um workaholic ao ponto da exaustão, tentando ocupar o lugar de Louisoix Leveilleur.
      <br>
      Depois de saber que Minfilia havia se tornado a Palavra da Mãe, o temperamento de Thancred muda, tornando-se menos alegre e mais estóico e endurecido, embora ele ainda mantenha seu humor seco. Apesar disso, Thancred aceitou o destino de Minfilia. Ele é dedicado à causa dos Scions of the Seventh Dawn e se tornou algo semelhante ao seu espião e reconagente, disposto a mergulhar em território hostil. Os outros Scions gostam de Thancred e o veem como um amigo próximo, especialmente Urianger e Y'sthola. Thancred, em troca, protege seus amigos e aliados e, em particular, tem o Guerreiro da Luz na mais alta estima. Nas últimas atualizações de Final Fantasy XIV: Stormblood, Thancred é revelado como um estrategista astuto e inteligente.</span>`;

      img_hero.innerHTML = `<img src="imagens/Thancred_big.png">`;
    }

    function Yshtola() {

    if (ch.className === "char_nome") {
      ch.classList.add("slide");
      ci.classList.add("slide_intro");
      bp.classList.add("slide_big");
      setTimeout(SlideRemove, 3000)
    }

    nome_hero.innerHTML = `Y'shtola`;

    intro_hero.innerHTML = `<span>Classe: Black Mage (DPS) <br> Y'shtola Rhul é apresentada como "Conjuradora Cultuada", um apelido que reflete sua compostura calma. Ela é uma voz da razão taciturna e bem falada, mesmo ao lado de seus pares igualmente acadêmicos entre os Scions of the Seventh Dawn, fornecendo uma visão nítida e relevante que dificilmente se desvia do assunto em questão. Isso contrasta com Thancred Waters, que frequentemente lança frases carismáticas e extravagantes para ser desviada por seu estoicismo.
    <br>
    A ousadia de Y'shtola surge quando sua paciência é testada ou como contra-ataque aos comentários ousados, irrelevantes ou conflitantes de outras pessoas. Ela deriva parte dessa audácia de seu antigo mestre, Matoya, os dois trocando piadas e insultos sutis. Apesar disso, eles se preocupam profundamente um com o outro, já que Y'shtola tem o maior respeito por sua antiga mestre, e Y'shtola tenta evitar desrespeitá-la. Y'shtola também é naturalmente cínica com pessoas que escondem a verdade e suas intenções. Ela rapidamente perdeu a confiança do Exarca de Cristal logo após ser convocada para o Primeiro devido à sua natureza secreta, e tentou evitar a calamidade à sua maneira, em vez de cooperar com ele. Ela só faz isso mais uma vez depois que o Guerreiro da Luz chegou ao Primeiro.
    <br>
    Ela tem um senso de humor seco e muitas vezes revida o Guerreiro da Luz quando ele responde com uma opção de diálogo sedutor ou humorístico. No entanto, se o Guerreiro responder com uma resposta mais séria e acadêmica, Y'shtola rapidamente expressa sua aprovação.</span>`;

    img_hero.innerHTML = `<img src="imagens/Y'shtola_big.png">`;
    }

    function Urianger() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Urianger`;

      intro_hero.innerHTML = `<span>Classe: Astrologian (Healer) <br> Urianger Augurelt passou a juventude absorto em livros de profecia. Devorou ​​todo tipo de fonte sobre seu assunto preferido, adquirindo um vocabulário erudito e maneirismos poéticos que alienaram seus pares. Encorajado por seu amigo de infância, Moenbryda, Urianger ingressou no Studium sob os auspícios da maior autoridade em profecia, o Arconte Louisoix Leveilleur. Pensa-se que Urianger decidiu se juntar ao Círculo do Conhecimento para aprender a verdade das Crônicas Divinas de Mezaya Mil Olhos, uma obra que sugeria a vinda da Sétima Calamidade Umbral.
      <br>
      Urianger costuma falar em poesia e enigmas. Ele é bem versado na profecia que aponta para a Sétima Era Umbral e recita um versículo em quase todos os encontros. Embora sua aparência e maneirismos sejam intimidantes, ele é virtuoso. Embora tente esconder isso atrás de uma fachada séria, ele é próximo do companheiro Scion Moenbryda, conhecendo-a desde a infância. Embora reservado, Urianger é leal a seus companheiros Scions e a seu professor, Louisoix Leveilleur.
      <br>
      Dói-lhe enganar seus amigos ou ocultar-lhes informações, mas ele segue com suas convicções, pois elas são para um bem maior. Quando tudo for revelado, Urianger não dá desculpas e deseja humildemente o perdão e a compreensão dos seus companheiros.</span>`;

      img_hero.innerHTML = `<img src="imagens/Urianger_big.png" style="margin-right: 100px">`;
    }

    function Alisae() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Alisaie`;

      intro_hero.innerHTML = `<span>Classe: Red Mage (DPS) <br> Alisaie Leveilleur é obstinada, cínica e, às vezes, emotiva. Ela é compassiva, preocupada com um Koboldling traumatizado que perdeu seus pais e deixando um buquê de flores em memória de seu avô, Nael van Darnus, e dos filhos de Bahamut.

      Como ela própria admite, Alphinaud sempre foi o mais inteligente dos dois, embora seja mais direta. Esta distinção é mais pronunciada quando ela invoca uma lâmina etérea para atacar os Guerreiros das Trevas, em vez de invocar um carbúnculo como seu irmão. Ao contrário de seu irmão, Alisaie tinha pouco interesse nos assuntos políticos da cidade-estado, cansada de suas mesquinhas lutas pelo poder. Ela ataca sozinha enquanto seu irmão se junta aos Scions of the Seventh Dawn, mas ao se reunir ela se torna mais envolvida, especialmente com as missões contra os Guerreiros das Trevas e para libertar Doma e Ala Mhigo.
      <br>
      Alisaie é a mais pragmática e direta das duas, na maioria das vezes preocupada com as possíveis ramificações de uma missão. Assim como Alphinaud, Alisaie respeita muito o Guerreiro da Luz e é especialmente grata por seu apoio em momentos difíceis. Ela vê os membros principais dos Scions como amigos íntimos e se preocupa muito com seu bem-estar.</span>`;

      img_hero.innerHTML = `<img src="imagens/Alisae_big.png" style="margin-right: 100px">`;
    }

    function Alphinaud() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Alphinaud`;

      intro_hero.innerHTML = `<span>Classe: Sage (Healer) <br> Alphinaud Leveilleur é um jovem seguro de si, calmo e maduro para a sua idade. Ele mostra mais interesse em intervir nos eventos Eorzeanos do que sua irmã, que prefere observar o desenrolar da história nas sombras. Carismático e diplomático, ele acha fácil ganhar a confiança dos líderes da Aliança Eorzeana, em parte graças ao crédito do seu avô. Alphinaud tem um grande ego e frequentemente entra em conflito com líderes de outras nações sobre os seus ideais. Alphinaud é indiscutivelmente o Scion mais experiente politicamente, ou pelo menos o mais interessado em se envolver em política. Sua habilidade em negociações políticas tem sido útil no avanço da agenda dos Scions.
      <br>
      Inicialmente Alphinaud participa dos assuntos de Eorzea com sua própria agenda: descobrir o que aconteceu com seu avô e terminar o que começou para testar seu potencial e provar seu valor. À medida que ele passa mais tempo com os Scions, ele entende por que seu avô se sacrificou tanto pelo reino e resolve seguir seus passos. Comparado com sua irmã, Alphinaud é mais sensato e consegue superar rapidamente o choque de acontecimentos inesperados e reformular suas estratégias. Ele é mais seletivo em suas batalhas diplomáticas, reconhecendo que depois que seu pai o renegou e a Alisaie, qualquer novo envolvimento pioraria a situação.</span>`;

      img_hero.innerHTML = `<img src="imagens/Alphinaud_big.png" style="margin-right: 100px">`;
    }

    function Graha() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `G'raha`;

      intro_hero.innerHTML = `<span>Classe: Paladin / White Mage / Black Mage (Omniclasse) <br> G'raha Tia é excêntrico, inicialmente jogando com o Guerreiro da Luz enquanto eles coletam a areia etérea, e caprichosamente nomeando a equipe de investigação combinada em homenagem a um antigo sábio Allagan.

      Como o Exarca de Cristal, apesar de sua aparência jovem, seus maneirismos beiram os de uma figura mais velha e sábia, dando orientação tanto ao povo do Crystarium quanto ao Guerreiro da Luz durante sua estadia no Primeiro. Muitas vezes inspirando aqueles ao seu redor a agir com palavras de encorajamento, ele é um líder eficaz reverenciado pelo povo de Crystarium como uma fonte de sabedoria. Ele é cordial, respeitoso e convidativo com o Guerreiro da Luz, bem como com os outros Scions e se preocupa com sua segurança e saúde durante sua estadia no Primeiro.
      <br>     
      Após retornar à Fonte, G'raha adota mais uma vez uma personalidade calma e amigável. Mas suas experiências em liderar pessoas como o Exarca de Cristal ainda aparecem às vezes, culminando com ele assumindo um papel de liderança quando Radz-at-Han é atacado pelas blasfêmias. Apesar das influências de seu tempo como Exarca, ele frequentemente expressa algumas de suas características juvenis mais inocentes, como ser inseguro em se juntar aos Scions; tais características o ajudam a formar um vínculo particular com Alisaie Leveilleur, que age de maneira divertida como sua superiora.</span>`;

      img_hero.innerHTML = `<img src="imagens/G'raha_tia_big.png">`;
    }

    function Estinien() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Estinien`;

      intro_hero.innerHTML = `<span>Classe: Dragoon (DPS) <br> Estinien Varlineau é estóico e fala de maneira brusca. Ele tem pouco respeito por aqueles que considera fracos e mal esconde seu desdém ao falar com eles. Estinien tem a reputação de desprezar reuniões sociais em Ishgard e detesta a ideia de manter as aparências. Ele passou a maior parte de sua vida movido por seu desejo de vingança contra Nidhogg e, portanto, vê pouca necessidade de companheirismo ou hobbies. Ele tem pouco respeito pela liderança zelosa de Ishgard, criticando as suas decisões e a falta de cuidado com os cidadãos. Na maioria das vezes ele guarda essas opiniões para si mesmo, mas é mais aberto a respeito disso com seus amigos e companheiros.
      <br>
      Sua personalidade se suaviza após viajar com o Guerreiro da Luz e seus companheiros. Embora sua maneira rude de falar nunca mude, Estinien admite que deixou de ser a vingança como sua única motivação. Embora muitas vezes o insulte, Estinien faz amizade com Alphinaud Leveilleur. Aymeric de Borel sugere que Estinien vê Alphinaud como um reflexo do irmão mais novo que ele perdeu nas chamas de Nidhogg, enquanto Alphinaud vê Estinien como o irmão mais velho que ele gostaria de ter. Estinien respeita o Guerreiro da Luz como um camarada de confiança e fala muito bem de Sor Aymeric, acreditando que ele é a melhor esperança de Ishgard para um novo futuro..</span>`;

      img_hero.innerHTML = `<img src="imagens/Estinien_big.png">`;
    }

    function Tataru() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Tataru`;

      intro_hero.innerHTML = `<span>Tesoureira dos Scions of the Seventh Dawn <br> Tataru Taru poderia ser considerada o membro mais inocente e gentil dos Scions of the Seventh Dawn, sempre disposto a ajudar seus membros com entusiasmo sem limites e um sorriso. Minfilia observou que Tataru costuma ser uma boa juíza de caráter. Apesar de ser hábil como recepcionista e contadora, muitas vezes ela se sente inferior aos outros membros e tenta aprender várias outras profissões, como se tornar mineira e arcanista, embora esses empreendimentos raramente tenham sucesso. No entanto, ela permanece leal aos seus companheiros Scions que a tratam com o maior respeito. Ela se preocupa com a segurança dos Scions e se algum dia os verá novamente. Ela é uma costureira habilidosa e tem afinidade com performance, muitas vezes praticando malabarismo (em um objetivo equivocado de se tornar uma artista de rua), bem como ocasionalmente trabalhando como cantora na taverna de Ishgard, o Cavaleiro Esquecido. Uma missão secundária em Labyrinthos revela que ela tem um potencial inexplorado para se tornar uma força valiosa no campo de batalha devido ao seu Carbúnculo durar em reservas de éter quase indefinidas, quando deveria ter desaparecido há muito tempo.
      <br>
      Tataru é inicialmente bastante tímida e insegura, mas conforme a história avança e ela encontra sua verdadeira vocação com os Scions, ela fica mais confiante e habilidosa. Às vezes ela até começa a aparecer sem ninguém esperar, e também começa a mostrar seu lado travesso. Embora cresça em outras áreas, como controle financeiro e alfaiataria, ela ainda prefere ficar longe do combate. Além de ser uma artesã talentosa, ela é uma mulher de negócios astuta e tem a ambição de transformar seu negócio em crescimento em um que possa rivalizar com a East Aldernald Company de Lolorito.</span>`;

      img_hero.innerHTML = `<img src="imagens/Tataru_big.png">`;
    }

    function Krile() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Krile`;

      intro_hero.innerHTML = `<span>Classe: Conjurer (Healer) <br> Krile Mayer Baldesion é gentil e inteligente e possui grande conhecimento em diversas áreas. Ela pode ler as pessoas e gosta de provocar os outros. Ela traz à tona o passado de Alphinaud Leveilleur para envergonhá-lo, nota a afeição de Thancred Waters por Minfilia, engana Unukalhai para que abandone sua fachada estóica e compara Y'shtola Rhul a seu mestre, Matoya, o que irrita o geralmente calmo Miqo'te. Mesmo assim, Krile se preocupa profundamente com seus amigos, trabalhando incansavelmente para ajudá-los. Ela rapidamente pede desculpas a Thancred e Unukalhai por sua investigação quando eles parecem se ofender, explicando que ela só faz isso para ter uma noção melhor das personalidades e motivações de seus companheiros, para que seja mais fácil confiar neles.
      <br>
      Krile era a mentor de Alphinaud na Academia Sharlayan e, embora ela o provoque, ela pensa nele com carinho e aprova como ele amadureceu, sabendo que ele viria resgatá-la se ela estivesse em perigo. Ela tem muita paciência e cabeça fria, mas em raras ocasiões pode perder a calma e até mesmo o Guerreiro da Luz não está isento de sua repreensão.</span>`;

      img_hero.innerHTML = `<img src="imagens/Krile_big.png">`;
    }

    function Moenbryda() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Moenbryda`;

      intro_hero.innerHTML = `<span>Classe: Marauder (Tank) <br> Moenbryda Wilfsunnwyn nasceu em Sharlayan e cresceu fascinada pelo conhecimento que a rodeava e sempre teve vontade de aprender. Sentindo a mesma atração pelo desconhecido, ela procurou fazer amizade com Urianger Augurelt, embora ele ignorasse sua importunação. Ela não desistiu e eventualmente os dois se aproximaram, e eram frequentemente encontrados na Grande Biblioteca Gubal lendo tomos e comendo almôndegas de cockatrice. Quando cresceu, estudou com Louisoix Leveilleur. Depois de desenvolver um talento na pesquisa etérica, ela se tornou uma Arconte e estava no Círculo do Conhecimento, no entanto, Louisoix disse-lhe para ficar em Sharlayan, uma ordem que ela seguiu com grande dificuldade. 
      <br>
      Moenbryda é uma mulher Seawolf Roegadyn com pele clara e cabelos prateados. Ela tem a tatuagem do Círculo do Saber na coxa esquerda, bem como a marca de um Arconte no pescoço. Ela veste um sobretudo azul com capuz branco e uma saia curta azul e botas de cano alto. Ela carrega um machado Dual Haken. 
      Apesar de sua aparência intimidadora, ela é amigável e extrovertida, tendo uma história com Yda e frequentemente flertando com Urianger.</span>`;

      img_hero.innerHTML = `<img src="imagens/Moenbryda_big.png">`;
    }

    function Minfilia() {

      if (ch.className === "char_nome") {
        ch.classList.add("slide");
        ci.classList.add("slide_intro");
        bp.classList.add("slide_big");
        setTimeout(SlideRemove, 3000)
      }

      nome_hero.innerHTML = `Minfilia`;

      intro_hero.innerHTML = `<span>Oráculo da Luz <br> No Final Fantasy XIV original, o título oficial de Minfilia Warde era "Antecedente Atuante" do Caminho dos Doze. Antecedente é sinônimo de “predecessora”, o que implicava que ela era alguém com o Eco que veio antes dos outros, inclusive o aventureiro, e os guiou com a sabedoria da antiguidade. Embora sábios e diplomaticamente experientes, seus possíveis seguidores frequentemente a prejudicavam, incluindo o companheiro de Trilha do aventureiro. Isto mostrou uma falta de formalidade no Caminho dos Doze, bem como uma liderança instável da sua parte, por mais sólidos que os seus ideais pudessem parecer.
      <br>
      Cinco anos após a Calamidade, Minfilia recebe mais respeito como líder dos Scions of the Seventh Dawn, particularmente por seus pares no Círculo do Conhecimento. Ela está mais alegre agora que não precisa manter a organização em segredo, embora não esteja indiferente à gravidade do conflito crescente. Minfilia é calorosa e acolhedora com o aventureiro.</span>`;

      img_hero.innerHTML = `<img src="imagens/Minfilia_big.png" style="margin-right: 100px">`;
    }