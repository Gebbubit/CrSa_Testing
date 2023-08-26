document.addEventListener('DOMContentLoaded', function () {
  const clearButton = document.querySelector('#clear-button');

  clearButton.addEventListener('click', () => {
    const inputFields = document.querySelectorAll('.soulmate-input, .weapon-input, .artifact-input');
    const imageFields = document.querySelectorAll('.soulmate-image, .weapon-image, .artifact-image');

    // Delete cookies for team builder inputs
    inputFields.forEach((input, index) => {
      document.cookie = `soulmate${index}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `weapon${index}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `artifact${index}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    // Reset input values and image sources
    inputFields.forEach(input => input.value = '');
    imageFields.forEach(image => image.src = '');

    // Refresh the page
    location.reload();
  });
});

  // Mappings
  const soulmateMapping = {
  karaha: 'https://static.miraheze.org/cravesagawiki/d/d1/Karaha_Icon.png',
  kotaro: 'https://static.miraheze.org/cravesagawiki/5/5a/Kotaro_Icon.png',
  shaoren: 'https://static.miraheze.org/cravesagawiki/e/ef/Shaoren_Icon.png',
  tesoro: 'https://static.miraheze.org/cravesagawiki/8/81/Tesoro_Icon.png',
  vaskhaan: 'https://static.miraheze.org/cravesagawiki/4/4b/Vaskhaan_Icon.png',
  vastol: 'https://static.miraheze.org/cravesagawiki/1/1a/Vastol_Icon.png',
  '(angler) joe': 'https://static.miraheze.org/cravesagawiki/1/14/%28Angler%29_Joe_Icon.png',
  chuck: 'https://static.miraheze.org/cravesagawiki/6/65/Chuck_Icon.png',
  gai: 'https://static.miraheze.org/cravesagawiki/c/cc/Gai_Icon.png',
  granruth: 'https://static.miraheze.org/cravesagawiki/f/f1/Granruth_Icon.png',
  kinta: 'https://static.miraheze.org/cravesagawiki/d/da/Kinta_Icon.png',
  byaku: 'https://static.miraheze.org/cravesagawiki/c/c6/Byaku_Icon.png',
  craps: 'https://static.miraheze.org/cravesagawiki/4/45/Craps_Icon.png',
  ennick: 'https://static.miraheze.org/cravesagawiki/5/54/Ennick_Icon.png',
  gigant: 'https://static.miraheze.org/cravesagawiki/a/ad/Gigant_Icon.png',
  patrossi: 'https://static.miraheze.org/cravesagawiki/1/16/Patrossi_Icon.png',
  radauros: 'https://static.miraheze.org/cravesagawiki/a/a9/Radauros_Icon.png',
  '(festival man) seldore': 'https://static.miraheze.org/cravesagawiki/d/dc/%28Festival_Man%29_Seldore_Icon.png',
  jeron: 'https://static.miraheze.org/cravesagawiki/7/7b/Jeron_Icon.png',
  kelavish: 'https://static.miraheze.org/cravesagawiki/9/9c/Kelavish_Icon.png',
  lyon: 'https://static.miraheze.org/cravesagawiki/b/b0/Lyon_Icon.png',
  phil: 'https://static.miraheze.org/cravesagawiki/b/b1/Phil_Icon.png',
  '(resonating rock) gabu': 'https://static.miraheze.org/cravesagawiki/2/23/%28Resonating_ROCK%29_Gabu_Icon.png',
  bergamond: 'https://static.miraheze.org/cravesagawiki/1/1b/Bergamond_Icon.png',
  epaulo: 'https://static.miraheze.org/cravesagawiki/d/d2/Epaulo_Icon.png',
  nine: 'https://static.miraheze.org/cravesagawiki/d/dd/Nine_Icon.png',
  '(roaring sea survivor) hakuma': 'https://static.miraheze.org/cravesagawiki/7/71/%28Roaring_Sea_Survivor%29_Hakuma_Icon.png',
  boun: 'https://static.miraheze.org/cravesagawiki/c/ca/Boun_Icon.png',
  lothar: 'https://static.miraheze.org/cravesagawiki/f/fa/Lothar_Icon.png',
  sabert: 'https://static.miraheze.org/cravesagawiki/6/62/Sabert_Icon.png',
  seldore: 'https://static.miraheze.org/cravesagawiki/d/d0/Seldore_Icon.png',
  zark: 'https://static.miraheze.org/cravesagawiki/4/4e/Zark_Icon.png',
  alvaro: 'https://static.miraheze.org/cravesagawiki/1/18/Alvaro_Icon.png',
  andrei: 'https://static.miraheze.org/cravesagawiki/a/a4/Andrei_Icon.png',
  dex: 'https://static.miraheze.org/cravesagawiki/b/b7/Dex_Icon.png',
  garon: 'https://static.miraheze.org/cravesagawiki/5/52/Garon_Icon.png',
  hakuma: 'https://static.miraheze.org/cravesagawiki/3/3c/Hakuma_Icon.png',
  keel: 'https://static.miraheze.org/cravesagawiki/8/89/Keel_Icon.png',
  nerfen: 'https://static.miraheze.org/cravesagawiki/d/d8/Nerfen_Icon.png',
  zagsia: 'https://static.miraheze.org/cravesagawiki/1/1f/Zagsia_Icon.png',
  archem: 'https://static.miraheze.org/cravesagawiki/0/01/Archem_Icon.png',
  ash: 'https://static.miraheze.org/cravesagawiki/3/36/Ash_Icon.png',
  koyomaru: 'https://static.miraheze.org/cravesagawiki/d/d6/Koyomaru_Icon.png',
  lionel: 'https://static.miraheze.org/cravesagawiki/b/b4/Lionel_Icon.png',
  pong: 'https://static.miraheze.org/cravesagawiki/d/d1/Pong_Icon.png',
  remaias: 'https://static.miraheze.org/cravesagawiki/0/04/Remaias_Icon.png',
  conrad: 'https://static.miraheze.org/cravesagawiki/e/e4/Conrad_Icon.png',
  mageiro: 'https://static.miraheze.org/cravesagawiki/c/cf/Mageiro_Icon.png',
  oguma: 'https://static.miraheze.org/cravesagawiki/f/ff/Oguma_Icon.png',
  rahl: 'https://static.miraheze.org/cravesagawiki/8/8e/Rahl_Icon.png',
  sergio: 'https://static.miraheze.org/cravesagawiki/9/9f/Sergio_Icon.png',
  wheel: 'https://static.miraheze.org/cravesagawiki/3/3f/Wheel_Icon.png',
  '(summer evening) schmiel': 'https://static.miraheze.org/cravesagawiki/c/c5/%28Summer_Evening%29_Schmiel_Icon.png',
  gabu: 'https://static.miraheze.org/cravesagawiki/6/68/Gabu_Icon.png',
  gary: 'https://static.miraheze.org/cravesagawiki/1/1d/Gary_Icon.png',
  gordolf: 'https://static.miraheze.org/cravesagawiki/2/26/Gordolf_Icon.png',
  ivan: 'https://static.miraheze.org/cravesagawiki/b/b9/Ivan_Icon.png',
  russell: 'https://static.miraheze.org/cravesagawiki/3/35/Russell_Icon.png',
  stannis: 'https://static.miraheze.org/cravesagawiki/5/53/Stannis_Icon.png',
  bran: 'https://static.miraheze.org/cravesagawiki/7/7e/Bran_Icon.png',
  jeffrey: 'https://static.miraheze.org/cravesagawiki/a/a1/Jeffrey_Icon.png',
  'main character': 'https://static.miraheze.org/cravesagawiki/5/5a/Main_Character_Icon.png',
  namda: 'https://static.miraheze.org/cravesagawiki/e/e9/Namda_Icon.png',
  schmiel: 'https://static.miraheze.org/cravesagawiki/e/e2/Schmiel_Icon.png',
  seven: 'https://static.miraheze.org/cravesagawiki/2/23/Seven_Icon.png',
  yannick: 'https://static.miraheze.org/cravesagawiki/c/c2/Yannick_Icon.png',
  '(sea breeze wave riding) chuck': 'https://static.miraheze.org/cravesagawiki/5/55/%28Sea_Breeze_Wave_Riding%29_Chuck_Icon.png',
  claude: 'https://static.miraheze.org/cravesagawiki/4/4b/Claude_Icon.png',
  defrecht: 'https://static.miraheze.org/cravesagawiki/d/df/Defrecht_Icon.png',
  emua: 'https://static.miraheze.org/cravesagawiki/6/61/Emua_Icon.png',
  sakamata: 'https://static.miraheze.org/cravesagawiki/d/d3/Sakamata_Icon.png',
  yatilde: 'https://static.miraheze.org/cravesagawiki/f/f9/Yatilde_Icon.png',
  eateg: 'https://static.miraheze.org/cravesagawiki/d/d1/Eateg_Icon.png',
  guardion: 'https://static.miraheze.org/cravesagawiki/5/50/Guardion_Icon.png',
  roton: 'https://static.miraheze.org/cravesagawiki/3/3f/Roton_Icon.png',
  creora: 'https://static.miraheze.org/cravesagawiki/0/04/Creora_Icon.png',
  django: 'https://static.miraheze.org/cravesagawiki/2/26/Django_Icon.png',
  parker: 'https://static.miraheze.org/cravesagawiki/6/6b/Parker_Icon.png',
  brando: 'https://static.miraheze.org/cravesagawiki/b/be/Brando_Icon.png',
  galgo: 'https://static.miraheze.org/cravesagawiki/1/11/Galgo_Icon.png',
  gastor: 'https://static.miraheze.org/cravesagawiki/f/f6/Gastor_Icon.png',
  leonardo: 'https://static.miraheze.org/cravesagawiki/c/ce/Leonardo_Icon.png',
  lybel: 'https://static.miraheze.org/cravesagawiki/c/c3/Lybel_Icon.png',
  maxi: 'https://static.miraheze.org/cravesagawiki/1/15/Maxi_Icon.png',
  tilt: 'https://static.miraheze.org/cravesagawiki/b/b3/Tilt_Icon.png',
  fubuki: 'https://static.miraheze.org/cravesagawiki/b/bd/Fubuki_Icon.png',
  joe: 'https://static.miraheze.org/cravesagawiki/e/ef/Joe_Icon.png',
  macvis: 'https://static.miraheze.org/cravesagawiki/3/34/Macvis_Icon.png',
  noche: 'https://static.miraheze.org/cravesagawiki/c/c4/Noche_Icon.png',
  yuriganos: 'https://static.miraheze.org/cravesagawiki/6/64/Yuriganos_Icon.png',
    // Add more soulmate mappings
  };
  const weaponMapping = {
  'chapter of sweat and training flame sword': 'https://static.miraheze.org/cravesagawiki/thumb/f/f4/%22Chapter_of_Sweat_and_Training%22_Flame_Sword.png/135px-%22Chapter_of_Sweat_and_Training%22_Flame_Sword.png',
  'archetic axe (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/6/6b/Archetic_Axe_%28Fire%29.png/135px-Archetic_Axe_%28Fire%29.png',
  'archetic bow (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5d/Archetic_Bow_%28Fire%29.png/135px-Archetic_Bow_%28Fire%29.png',
  'archetic dual blade (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5f/Archetic_Dual_Blade_%28Fire%29.png/135px-Archetic_Dual_Blade_%28Fire%29.png',
  'archetic gun (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/0/04/Archetic_Gun_%28Fire%29.png/135px-Archetic_Gun_%28Fire%29.png',
  'archetic ring (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/6/67/Archetic_Ring_%28Fire%29.png/135px-Archetic_Ring_%28Fire%29.png',
  'archetic shield (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c7/Archetic_Shield_%28Fire%29.png/135px-Archetic_Shield_%28Fire%29.png',
  'archetic spear (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8c/Archetic_Spear_%28Fire%29.png/135px-Archetic_Spear_%28Fire%29.png',
  'archetic staff (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/4/44/Archetic_Staff_%28Fire%29.png/135px-Archetic_Staff_%28Fire%29.png',
  'archetic sword (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/4/40/Archetic_Sword_%28Fire%29.png/135px-Archetic_Sword_%28Fire%29.png',
  'banchoaxe': 'https://static.miraheze.org/cravesagawiki/thumb/6/6c/BANCHOAXE.png/135px-BANCHOAXE.png',
  'chakraga vishud': 'https://static.miraheze.org/cravesagawiki/thumb/4/4f/Chakraga_Vishud.png/135px-Chakraga_Vishud.png',
  'colada tizon (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f1/Colada_Tizon_%28Weapon%29.png/135px-Colada_Tizon_%28Weapon%29.png',
  'dahomeyloa roussi': 'https://static.miraheze.org/cravesagawiki/thumb/4/4c/Dahomeyloa_Roussi.png/135px-Dahomeyloa_Roussi.png',
  'dragon breaks': 'https://static.miraheze.org/cravesagawiki/thumb/a/ae/Dragon_Breaks.png/135px-Dragon_Breaks.png',
  'flaming sword vulcanite': 'https://static.miraheze.org/cravesagawiki/thumb/8/88/Flaming_Sword_Vulcanite.png/135px-Flaming_Sword_Vulcanite.png',
  'gungnir (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8d/Gungnir_%28Weapon%29.png/135px-Gungnir_%28Weapon%29.png',
  'imperial armor': 'https://static.miraheze.org/cravesagawiki/thumb/b/bd/Imperial_Armor.png/135px-Imperial_Armor.png',
  'kerykeion (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ec/Kerykeion_%28Weapon%29.png/135px-Kerykeion_%28Weapon%29.png',
  'loa allash': 'https://static.miraheze.org/cravesagawiki/thumb/f/ff/Loa_Allash.png/135px-Loa_Allash.png',
  'ra ankh': 'https://static.miraheze.org/cravesagawiki/thumb/3/33/Ra_Ankh.png/135px-Ra_Ankh.png',
  'shield of sacred flame\'s holy snake': 'https://static.miraheze.org/cravesagawiki/thumb/4/42/Shield_of_Sacred_Flame%27s_Holy_Snake.png/135px-Shield_of_Sacred_Flame%27s_Holy_Snake.png',
  'solar flame shield, re': 'https://static.miraheze.org/cravesagawiki/thumb/3/3f/Solar_Flame_Shield%2C_Re.png/135px-Solar_Flame_Shield%2C_Re.png',
  'sudarshana (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/b/ba/Sudarshana_%28Weapon%29.png/135px-Sudarshana_%28Weapon%29.png',
  'svalinn\'s axe': 'https://static.miraheze.org/cravesagawiki/thumb/8/8f/Svalinn%27s_Axe.png/135px-Svalinn%27s_Axe.png',
  'sword of sacred flame\'s holy snake': 'https://static.miraheze.org/cravesagawiki/thumb/6/63/Sword_of_Sacred_Flame%27s_Holy_Snake.png/135px-Sword_of_Sacred_Flame%27s_Holy_Snake.png',
  'treasure escutcheon': 'https://static.miraheze.org/cravesagawiki/thumb/f/ff/Treasure_Escutcheon.png/135px-Treasure_Escutcheon.png',
  'xiuhcoatl (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3f/Xiuhcoatl_%28Weapon%29.png/135px-Xiuhcoatl_%28Weapon%29.png',
  'burn my spirit spear': 'https://static.miraheze.org/cravesagawiki/thumb/9/9e/Burn_My_Spirit_Spear.png/135px-Burn_My_Spirit_Spear.png',
  'commander\'s magic flame helmet': 'https://static.miraheze.org/cravesagawiki/thumb/e/ea/Commander%27s_Magic_Flame_Helmet.png/135px-Commander%27s_Magic_Flame_Helmet.png',
  'fab\'s fire shield': 'https://static.miraheze.org/cravesagawiki/thumb/5/55/Fab%27s_Fire_Shield.png/135px-Fab%27s_Fire_Shield.png',
  'foxbrella': 'https://static.miraheze.org/cravesagawiki/thumb/b/b1/Foxbrella.png/135px-Foxbrella.png',
  'frey (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/a/ac/Frey_%28Weapon%29.png/135px-Frey_%28Weapon%29.png',
  'lion serpent\'s claw (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/8/89/Lion_Serpent%27s_Claw_%28Fire%29.png/135px-Lion_Serpent%27s_Claw_%28Fire%29.png',
  'lion serpent\'s eye (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a5/Lion_Serpent%27s_Eye_%28Fire%29.png/135px-Lion_Serpent%27s_Eye_%28Fire%29.png',
  'lion serpent\'s fang (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/b/bd/Lion_Serpent%27s_Fang_%28Fire%29.png/135px-Lion_Serpent%27s_Fang_%28Fire%29.png',
  'lion serpent\'s horn (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0c/Lion_Serpent%27s_Horn_%28Fire%29.png/135px-Lion_Serpent%27s_Horn_%28Fire%29.png',
  'lion serpent\'s lion head (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/a/ad/Lion_Serpent%27s_Lion_Head_%28Fire%29.png/135px-Lion_Serpent%27s_Lion_Head_%28Fire%29.png',
  'lion serpent\'s mouth (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/9/90/Lion_Serpent%27s_Mouth_%28Fire%29.png/135px-Lion_Serpent%27s_Mouth_%28Fire%29.png',
  'lion serpent\'s spine (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e9/Lion_Serpent%27s_Spine_%28Fire%29.png/135px-Lion_Serpent%27s_Spine_%28Fire%29.png',
  'lion serpent\'s tail (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3b/Lion_Serpent%27s_Tail_%28Fire%29.png/135px-Lion_Serpent%27s_Tail_%28Fire%29.png',
  'lion serpent\'s wing (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5f/Lion_Serpent%27s_Wing_%28Fire%29.png/135px-Lion_Serpent%27s_Wing_%28Fire%29.png',
  'rapid delivery of flame': 'https://static.miraheze.org/cravesagawiki/thumb/6/6c/Rapid_Delivery_of_Flame.png/135px-Rapid_Delivery_of_Flame.png',
  'svalinn (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a2/Svalinn_%28Weapon%29.png/135px-Svalinn_%28Weapon%29.png',
  'sword of still flame': 'https://static.miraheze.org/cravesagawiki/thumb/c/c3/Sword_of_Still_Flame.png/135px-Sword_of_Still_Flame.png',
  'warlock staff of passion': 'https://static.miraheze.org/cravesagawiki/thumb/8/81/Warlock_Staff_of_Passion.png/135px-Warlock_Staff_of_Passion.png',
  'wolves\'s magic tome': 'https://static.miraheze.org/cravesagawiki/thumb/f/f8/Wolves%27s_Magic_Tome.png/135px-Wolves%27s_Magic_Tome.png',
  'big appetite': 'https://static.miraheze.org/cravesagawiki/thumb/f/fd/Big_Appetite.png/135px-Big_Appetite.png',
  'guardian of kusan': 'https://static.miraheze.org/cravesagawiki/thumb/f/f0/Guardian_of_Kusan.png/135px-Guardian_of_Kusan.png',
  'rotonic spear': 'https://static.miraheze.org/cravesagawiki/thumb/9/9e/Rotonic_Spear.png/135px-Rotonic_Spear.png',
  's steam powered axe (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1a/S_Steam_Powered_Axe_%28Fire%29.png/135px-S_Steam_Powered_Axe_%28Fire%29.png',
  's steam powered blade (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8f/S_Steam_Powered_Blade_%28Fire%29.png/135px-S_Steam_Powered_Blade_%28Fire%29.png',
  's steam powered bow (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/6/66/S_Steam_Powered_Bow_%28Fire%29.png/135px-S_Steam_Powered_Bow_%28Fire%29.png',
  's steam powered gauntlet (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/d/d4/S_Steam_Powered_Gauntlet_%28Fire%29.png/135px-S_Steam_Powered_Gauntlet_%28Fire%29.png',
  's steam powered gun (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/6/6b/S_Steam_Powered_Gun_%28Fire%29.png/135px-S_Steam_Powered_Gun_%28Fire%29.png',
  's steam powered magic tome (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/8/84/S_Steam_Powered_Magic_Tome_%28Fire%29.png/135px-S_Steam_Powered_Magic_Tome_%28Fire%29.png',
  's steam powered saw blade (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/8/87/S_Steam_Powered_Saw_Blade_%28Fire%29.png/135px-S_Steam_Powered_Saw_Blade_%28Fire%29.png',
  's steam powered spear (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f3/S_Steam_Powered_Spear_%28Fire%29.png/135px-S_Steam_Powered_Spear_%28Fire%29.png',
  's steam powered staff (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/3/39/S_Steam_Powered_Staff_%28Fire%29.png/135px-S_Steam_Powered_Staff_%28Fire%29.png',
  'balthazan axe (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f5/Balthazan_Axe_%28Fire%29.png/135px-Balthazan_Axe_%28Fire%29.png',
  'balthazan bow (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/3/31/Balthazan_Bow_%28Fire%29.png/135px-Balthazan_Bow_%28Fire%29.png',
  'balthazan cane (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/b/bb/Balthazan_Cane_%28Fire%29.png/135px-Balthazan_Cane_%28Fire%29.png',
  'balthazan dual blade (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/3/36/Balthazan_Dual_Blade_%28Fire%29.png/135px-Balthazan_Dual_Blade_%28Fire%29.png',
  'balthazan grimoire (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/3/34/Balthazan_Grimoire_%28Fire%29.png/135px-Balthazan_Grimoire_%28Fire%29.png',
  'balthazan gun (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3a/Balthazan_Gun_%28Fire%29.png/135px-Balthazan_Gun_%28Fire%29.png',
  'balthazan shield (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a9/Balthazan_Shield_%28Fire%29.png/135px-Balthazan_Shield_%28Fire%29.png',
  'balthazan spear (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0f/Balthazan_Spear_%28Fire%29.png/135px-Balthazan_Spear_%28Fire%29.png',
  'balthazan sword (fire)': 'https://static.miraheze.org/cravesagawiki/thumb/6/6d/Balthazan_Sword_%28Fire%29.png/135px-Balthazan_Sword_%28Fire%29.png',
  'akkerte (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/3/38/Akkerte_%28Weapon%29.png/135px-Akkerte_%28Weapon%29.png',
  'archetic axe (water)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a8/Archetic_Axe_%28Water%29.png/135px-Archetic_Axe_%28Water%29.png',
  'archetic bow (water)': 'https://static.miraheze.org/cravesagawiki/thumb/4/4b/Archetic_Bow_%28Water%29.png/135px-Archetic_Bow_%28Water%29.png',
  'archetic dual blade (water)': 'https://static.miraheze.org/cravesagawiki/thumb/7/78/Archetic_Dual_Blade_%28Water%29.png/135px-Archetic_Dual_Blade_%28Water%29.png',
  'archetic gun (water)': 'https://static.miraheze.org/cravesagawiki/thumb/d/db/Archetic_Gun_%28Water%29.png/135px-Archetic_Gun_%28Water%29.png',
  'archetic ring (water)': 'https://static.miraheze.org/cravesagawiki/thumb/1/11/Archetic_Ring_%28Water%29.png/135px-Archetic_Ring_%28Water%29.png',
  'archetic shield (water)': 'https://static.miraheze.org/cravesagawiki/thumb/4/4e/Archetic_Shield_%28Water%29.png/135px-Archetic_Shield_%28Water%29.png',
  'archetic spear (water)': 'https://static.miraheze.org/cravesagawiki/thumb/0/01/Archetic_Spear_%28Water%29.png/135px-Archetic_Spear_%28Water%29.png',
  'archetic staff (water)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c8/Archetic_Staff_%28Water%29.png/135px-Archetic_Staff_%28Water%29.png',
  'archetic sword (water)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c8/Archetic_Sword_%28Water%29.png/135px-Archetic_Sword_%28Water%29.png',
  'azure dragon crescent blade': 'https://static.miraheze.org/cravesagawiki/thumb/a/a2/Azure_Dragon_Crescent_Blade.png/135px-Azure_Dragon_Crescent_Blade.png',
  'bbq a la broche': 'https://static.miraheze.org/cravesagawiki/thumb/c/ca/BBQ_a_la_Broche.png/135px-BBQ_a_la_Broche.png',
  'blue ocean dancing meteor': 'https://static.miraheze.org/cravesagawiki/thumb/a/ae/Blue_Ocean_Dancing_Meteor.png/135px-Blue_Ocean_Dancing_Meteor.png',
  'cyber arm type a-17': 'https://static.miraheze.org/cravesagawiki/thumb/d/d6/Cyber_Arm_Type_A-17.png/135px-Cyber_Arm_Type_A-17.png',
  'detective charming\'s watch gun': 'https://static.miraheze.org/cravesagawiki/thumb/d/d6/Detective_Charming%27s_Watch_Gun.png/135px-Detective_Charming%27s_Watch_Gun.png',
  'gae bolg (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/9/9f/Gae_Bolg_%28Weapon%29.png/135px-Gae_Bolg_%28Weapon%29.png',
  'kakobu taito': 'https://static.miraheze.org/cravesagawiki/thumb/e/ea/Kakobu_Taito.png/135px-Kakobu_Taito.png',
  'kinta\'s brand special potholder': 'https://static.miraheze.org/cravesagawiki/thumb/1/1a/Kinta%27s_Brand_Special_Potholder.png/135px-Kinta%27s_Brand_Special_Potholder.png',
  'land-dragging\'s water rope gun': 'https://static.miraheze.org/cravesagawiki/thumb/f/f1/Land-dragging%27s_Water_Rope_Gun.png/135px-Land-dragging%27s_Water_Rope_Gun.png',
  'lizarion launcher': 'https://static.miraheze.org/cravesagawiki/thumb/c/ca/Lizarion_Launcher.png/135px-Lizarion_Launcher.png',
  'magic amp snow daruma armor': 'https://static.miraheze.org/cravesagawiki/thumb/a/a1/Magic_Amp_Snow_Daruma_Armor.png/135px-Magic_Amp_Snow_Daruma_Armor.png',
  'magic spear\'s thousands spike shield': 'https://static.miraheze.org/cravesagawiki/thumb/7/75/Magic_Spear%27s_Thousands_Spike_Shield.png/135px-Magic_Spear%27s_Thousands_Spike_Shield.png',
  'magic spear\'s torrential gun': 'https://static.miraheze.org/cravesagawiki/thumb/0/03/Magic_Spear%27s_Torrential_Gun.png/135px-Magic_Spear%27s_Torrential_Gun.png',
  'mysterious dragon\'s storm gun': 'https://static.miraheze.org/cravesagawiki/thumb/0/0c/Mysterious_Dragon%27s_Storm_Gun.png/135px-Mysterious_Dragon%27s_Storm_Gun.png',
  'taiko kabuto': 'https://static.miraheze.org/cravesagawiki/thumb/6/6b/Taiko_Kabuto.png/135px-Taiko_Kabuto.png',
  'yasakani no magatama (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/d/dd/Yasakani_no_Magatama_%28Weapon%29.png/135px-Yasakani_no_Magatama_%28Weapon%29.png',
  'azoth (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/4/4f/Azoth_%28Weapon%29.png/135px-Azoth_%28Weapon%29.png',
  'blood dagger': 'https://static.miraheze.org/cravesagawiki/thumb/3/31/Blood_Dagger.png/135px-Blood_Dagger.png',
  'demon spear white fox': 'https://static.miraheze.org/cravesagawiki/thumb/c/cc/Demon_Spear_White_Fox.png/135px-Demon_Spear_White_Fox.png',
  'librarian\'s secret': 'https://static.miraheze.org/cravesagawiki/thumb/c/cf/Librarian%27s_Secret.png/135px-Librarian%27s_Secret.png',
  'lion serpent\'s claw (water)': 'https://static.miraheze.org/cravesagawiki/thumb/a/ad/Lion_Serpent%27s_Claw_%28Water%29.png/135px-Lion_Serpent%27s_Claw_%28Water%29.png',
  'lion serpent\'s eye (water)': 'https://static.miraheze.org/cravesagawiki/thumb/6/66/Lion_Serpent%27s_Eye_%28Water%29.png/135px-Lion_Serpent%27s_Eye_%28Water%29.png',
  'lion serpent\'s fang (water)': 'https://static.miraheze.org/cravesagawiki/thumb/9/9d/Lion_Serpent%27s_Fang_%28Water%29.png/135px-Lion_Serpent%27s_Fang_%28Water%29.png',
  'lion serpent\'s horn (water)': 'https://static.miraheze.org/cravesagawiki/thumb/5/57/Lion_Serpent%27s_Horn_%28Water%29.png/135px-Lion_Serpent%27s_Horn_%28Water%29.png',
  'lion serpent\'s lion head (water)': 'https://static.miraheze.org/cravesagawiki/thumb/7/74/Lion_Serpent%27s_Lion_Head_%28Water%29.png/135px-Lion_Serpent%27s_Lion_Head_%28Water%29.png',
  'lion serpent\'s mouth (water)': 'https://static.miraheze.org/cravesagawiki/thumb/0/00/Lion_Serpent%27s_Mouth_%28Water%29.png/135px-Lion_Serpent%27s_Mouth_%28Water%29.png',
  'lion serpent\'s spine (water)': 'https://static.miraheze.org/cravesagawiki/thumb/f/fc/Lion_Serpent%27s_Spine_%28Water%29.png/135px-Lion_Serpent%27s_Spine_%28Water%29.png',
  'lion serpent\'s tail (water)': 'https://static.miraheze.org/cravesagawiki/thumb/a/ae/Lion_Serpent%27s_Tail_%28Water%29.png/135px-Lion_Serpent%27s_Tail_%28Water%29.png',
  'lion serpent\'s wing (water)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c5/Lion_Serpent%27s_Wing_%28Water%29.png/135px-Lion_Serpent%27s_Wing_%28Water%29.png',
  'oyachan nabe owner\'s kitchen knife': 'https://static.miraheze.org/cravesagawiki/thumb/e/ed/Oyachan_Nabe_Owner%27s_Kitchen_Knife.png/135px-Oyachan_Nabe_Owner%27s_Kitchen_Knife.png',
  'p mark\'s aqua magic cannon': 'https://static.miraheze.org/cravesagawiki/thumb/6/60/P_Mark%27s_Aqua_Magic_Cannon.png/135px-P_Mark%27s_Aqua_Magic_Cannon.png',
  'wolfy pistol': 'https://static.miraheze.org/cravesagawiki/thumb/5/5d/Wolfy_Pistol.png/135px-Wolfy_Pistol.png',
  'yatsukamizu\'s enlightened mind staff': 'https://static.miraheze.org/cravesagawiki/thumb/b/b7/Yatsukamizu%27s_Enlightened_Mind_Staff.png/135px-Yatsukamizu%27s_Enlightened_Mind_Staff.png',
  'earnest bull': 'https://static.miraheze.org/cravesagawiki/thumb/5/57/Earnest_Bull.png/135px-Earnest_Bull.png',
  'military\'s mechanical spear': 'https://static.miraheze.org/cravesagawiki/thumb/0/01/Military%27s_Mechanical_Spear.png/135px-Military%27s_Mechanical_Spear.png',
  'noble shield': 'https://static.miraheze.org/cravesagawiki/thumb/3/36/Noble_Shield.png/135px-Noble_Shield.png',
  's steam powered axe (water)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f7/S_Steam_Powered_Axe_%28Water%29.png/135px-S_Steam_Powered_Axe_%28Water%29.png',
  's steam powered blade (water)': 'https://static.miraheze.org/cravesagawiki/thumb/5/57/S_Steam_Powered_Blade_%28Water%29.png/135px-S_Steam_Powered_Blade_%28Water%29.png',
  's steam powered bow (water)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e6/S_Steam_Powered_Bow_%28Water%29.png/135px-S_Steam_Powered_Bow_%28Water%29.png',
  's steam powered gauntlet (water)': 'https://static.miraheze.org/cravesagawiki/thumb/4/41/S_Steam_Powered_Gauntlet_%28Water%29.png/135px-S_Steam_Powered_Gauntlet_%28Water%29.png',
  's steam powered gun (water)': 'https://static.miraheze.org/cravesagawiki/thumb/2/22/S_Steam_Powered_Gun_%28Water%29.png/135px-S_Steam_Powered_Gun_%28Water%29.png',
  's steam powered magic tome (water)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5f/S_Steam_Powered_Magic_Tome_%28Water%29.png/135px-S_Steam_Powered_Magic_Tome_%28Water%29.png',
  's steam powered saw blade (water)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e9/S_Steam_Powered_Saw_Blade_%28Water%29.png/135px-S_Steam_Powered_Saw_Blade_%28Water%29.png',
  's steam powered spear (water)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e9/S_Steam_Powered_Spear_%28Water%29.png/135px-S_Steam_Powered_Spear_%28Water%29.png',
  's steam powered staff (water)': 'https://static.miraheze.org/cravesagawiki/thumb/2/25/S_Steam_Powered_Staff_%28Water%29.png/135px-S_Steam_Powered_Staff_%28Water%29.png',
  'balthazan axe (water)': 'https://static.miraheze.org/cravesagawiki/thumb/9/91/Balthazan_Axe_%28Water%29.png/135px-Balthazan_Axe_%28Water%29.png',
  'balthazan bow (water)': 'https://static.miraheze.org/cravesagawiki/thumb/7/7b/Balthazan_Bow_%28Water%29.png/135px-Balthazan_Bow_%28Water%29.png',
  'balthazan cane (water)': 'https://static.miraheze.org/cravesagawiki/thumb/4/49/Balthazan_Cane_%28Water%29.png/135px-Balthazan_Cane_%28Water%29.png',
  'balthazan dual blade (water)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f6/Balthazan_Dual_Blade_%28Water%29.png/135px-Balthazan_Dual_Blade_%28Water%29.png',
  'balthazan grimoire (water)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5a/Balthazan_Grimoire_%28Water%29.png/135px-Balthazan_Grimoire_%28Water%29.png',
  'balthazan gun (water)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3f/Balthazan_Gun_%28Water%29.png/135px-Balthazan_Gun_%28Water%29.png',
  'balthazan shield (water)': 'https://static.miraheze.org/cravesagawiki/thumb/5/52/Balthazan_Shield_%28Water%29.png/135px-Balthazan_Shield_%28Water%29.png',
  'balthazan spear (water)': 'https://static.miraheze.org/cravesagawiki/thumb/7/7c/Balthazan_Spear_%28Water%29.png/135px-Balthazan_Spear_%28Water%29.png',
  'balthazan sword (water)': 'https://static.miraheze.org/cravesagawiki/thumb/b/b3/Balthazan_Sword_%28Water%29.png/135px-Balthazan_Sword_%28Water%29.png',
  'aegis (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/7/75/Aegis_%28Weapon%29.png/135px-Aegis_%28Weapon%29.png',
  'archetic axe (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e1/Archetic_Axe_%28Earth%29.png/135px-Archetic_Axe_%28Earth%29.png',
  'archetic bow (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/0/08/Archetic_Bow_%28Earth%29.png/135px-Archetic_Bow_%28Earth%29.png',
  'archetic dual blade (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1b/Archetic_Dual_Blade_%28Earth%29.png/135px-Archetic_Dual_Blade_%28Earth%29.png',
  'archetic gun (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/0/00/Archetic_Gun_%28Earth%29.png/135px-Archetic_Gun_%28Earth%29.png',
  'archetic ring (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a8/Archetic_Ring_%28Earth%29.png/135px-Archetic_Ring_%28Earth%29.png',
  'archetic shield (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/4/44/Archetic_Shield_%28Earth%29.png/135px-Archetic_Shield_%28Earth%29.png',
  'archetic spear (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/4/47/Archetic_Spear_%28Earth%29.png/135px-Archetic_Spear_%28Earth%29.png',
  'archetic staff (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/b/b4/Archetic_Staff_%28Earth%29.png/135px-Archetic_Staff_%28Earth%29.png',
  'archetic sword (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c0/Archetic_Sword_%28Earth%29.png/135px-Archetic_Sword_%28Earth%29.png',
  'baihu axe': 'https://static.miraheze.org/cravesagawiki/thumb/7/7e/Baihu_Axe.png/135px-Baihu_Axe.png',
  'bellagio': 'https://static.miraheze.org/cravesagawiki/thumb/5/51/Bellagio.png/135px-Bellagio.png',
  'big cow wheel': 'https://static.miraheze.org/cravesagawiki/thumb/d/db/Big_Cow_Wheel.png/135px-Big_Cow_Wheel.png',
  'cattle cloak': 'https://static.miraheze.org/cravesagawiki/thumb/8/80/Cattle_Cloak.png/135px-Cattle_Cloak.png',
  'chef de caliber': 'https://static.miraheze.org/cravesagawiki/thumb/4/42/Chef_de_Caliber.png/135px-Chef_de_Caliber.png',
  'enical saber': 'https://static.miraheze.org/cravesagawiki/thumb/5/51/Enical_Saber.png/135px-Enical_Saber.png',
  'fragarach (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/5/59/Fragarach_%28Weapon%29.png/135px-Fragarach_%28Weapon%29.png',
  'gigant workshop forged\'s forked blade': 'https://static.miraheze.org/cravesagawiki/thumb/5/58/Gigant_Workshop_Forged%27s_Forked_Blade.png/135px-Gigant_Workshop_Forged%27s_Forked_Blade.png',
  'jawa\'s secret sword': 'https://static.miraheze.org/cravesagawiki/thumb/c/cf/Jawa%27s_Secret_Sword.png/135px-Jawa%27s_Secret_Sword.png',
  'king\'s kris': 'https://static.miraheze.org/cravesagawiki/thumb/2/2f/King%27s_Kris.png/135px-King%27s_Kris.png',
  'mjolnir (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0a/Mjolnir_%28Weapon%29.png/135px-Mjolnir_%28Weapon%29.png',
  'mysterious dragon\'s sealing mirror': 'https://static.miraheze.org/cravesagawiki/thumb/e/e0/Mysterious_Dragon%27s_Sealing_Mirror.png/135px-Mysterious_Dragon%27s_Sealing_Mirror.png',
  'noble diamond sword': 'https://static.miraheze.org/cravesagawiki/thumb/d/de/Noble_Diamond_Sword.png/135px-Noble_Diamond_Sword.png',
  'otherworldly\'s strange stone axe': 'https://static.miraheze.org/cravesagawiki/thumb/a/a8/Otherworldly%27s_Strange_Stone_Axe.png/135px-Otherworldly%27s_Strange_Stone_Axe.png',
  'otherworldly\'s strange stone beads': 'https://static.miraheze.org/cravesagawiki/thumb/8/85/Otherworldly%27s_Strange_Stone_Beads.png/135px-Otherworldly%27s_Strange_Stone_Beads.png',
  'samildanach': 'https://static.miraheze.org/cravesagawiki/thumb/2/29/Samildanach.png/135px-Samildanach.png',
  'sweet love\'s cook knife': 'https://static.miraheze.org/cravesagawiki/thumb/a/a3/Sweet_Love%27s_Cook_Knife.png/135px-Sweet_Love%27s_Cook_Knife.png',
  'thunder god\'s lightning demon': 'https://static.miraheze.org/cravesagawiki/thumb/b/b4/Thunder_God%27s_Lightning_Demon.png/135px-Thunder_God%27s_Lightning_Demon.png',
  'thunder god\'s lightning sword': 'https://static.miraheze.org/cravesagawiki/thumb/d/df/Thunder_God%27s_Lightning_Sword.png/135px-Thunder_God%27s_Lightning_Sword.png',
  'achilles (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/6/6e/Achilles_%28Weapon%29.png/135px-Achilles_%28Weapon%29.png',
  'bomber brothers': 'https://static.miraheze.org/cravesagawiki/thumb/0/02/Bomber_Brothers.png/135px-Bomber_Brothers.png',
  'croupier': 'https://static.miraheze.org/cravesagawiki/thumb/f/fb/Croupier.png/135px-Croupier.png',
  'justice mask': 'https://static.miraheze.org/cravesagawiki/thumb/a/a0/Justice_Mask.png/135px-Justice_Mask.png',
  'li kui\'s twin axe': 'https://static.miraheze.org/cravesagawiki/thumb/7/7d/Li_Kui%27s_Twin_Axe.png/135px-Li_Kui%27s_Twin_Axe.png',
  'lion serpent\'s claw (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e9/Lion_Serpent%27s_Claw_%28Earth%29.png/135px-Lion_Serpent%27s_Claw_%28Earth%29.png',
  'lion serpent\'s eye (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/1/10/Lion_Serpent%27s_Eye_%28Earth%29.png/135px-Lion_Serpent%27s_Eye_%28Earth%29.png',
  'lion serpent\'s fang (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/c/ca/Lion_Serpent%27s_Fang_%28Earth%29.png/135px-Lion_Serpent%27s_Fang_%28Earth%29.png',
  'lion serpent\'s horn (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/7/75/Lion_Serpent%27s_Horn_%28Earth%29.png/135px-Lion_Serpent%27s_Horn_%28Earth%29.png',
  'lion serpent\'s lion head (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/a/ac/Lion_Serpent%27s_Lion_Head_%28Earth%29.png/135px-Lion_Serpent%27s_Lion_Head_%28Earth%29.png',
  'lion serpent\'s mouth (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/6/60/Lion_Serpent%27s_Mouth_%28Earth%29.png/135px-Lion_Serpent%27s_Mouth_%28Earth%29.png',
  'lion serpent\'s spine (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a6/Lion_Serpent%27s_Spine_%28Earth%29.png/135px-Lion_Serpent%27s_Spine_%28Earth%29.png',
  'lion serpent\'s tail (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f7/Lion_Serpent%27s_Tail_%28Earth%29.png/135px-Lion_Serpent%27s_Tail_%28Earth%29.png',
  'lion serpent\'s wing (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e2/Lion_Serpent%27s_Wing_%28Earth%29.png/135px-Lion_Serpent%27s_Wing_%28Earth%29.png',
  'machine whisk gun': 'https://static.miraheze.org/cravesagawiki/thumb/3/34/Machine_Whisk_Gun.png/135px-Machine_Whisk_Gun.png',
  'mega driver sword': 'https://static.miraheze.org/cravesagawiki/thumb/d/df/Mega_Driver_Sword.png/135px-Mega_Driver_Sword.png',
  'wolf chieftain\'s rock sword': 'https://static.miraheze.org/cravesagawiki/thumb/2/27/Wolf_Chieftain%27s_Rock_Sword.png/135px-Wolf_Chieftain%27s_Rock_Sword.png',
  'bandit sword': 'https://static.miraheze.org/cravesagawiki/thumb/9/93/Bandit_Sword.png/135px-Bandit_Sword.png',
  'master\'s exclusive electric axe': 'https://static.miraheze.org/cravesagawiki/thumb/2/2e/Master%27s_Exclusive_Electric_Axe.png/135px-Master%27s_Exclusive_Electric_Axe.png',
  's steam powered axe (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0a/S_Steam_Powered_Axe_%28Earth%29.png/135px-S_Steam_Powered_Axe_%28Earth%29.png',
  's steam powered blade (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ec/S_Steam_Powered_Blade_%28Earth%29.png/135px-S_Steam_Powered_Blade_%28Earth%29.png',
  's steam powered bow (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c7/S_Steam_Powered_Bow_%28Earth%29.png/135px-S_Steam_Powered_Bow_%28Earth%29.png',
  's steam powered gauntlet (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/b/b4/S_Steam_Powered_Gauntlet_%28Earth%29.png/135px-S_Steam_Powered_Gauntlet_%28Earth%29.png',
  's steam powered gun (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/9/99/S_Steam_Powered_Gun_%28Earth%29.png/135px-S_Steam_Powered_Gun_%28Earth%29.png',
  's steam powered magic tome (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/3/34/S_Steam_Powered_Magic_Tome_%28Earth%29.png/135px-S_Steam_Powered_Magic_Tome_%28Earth%29.png',
  's steam powered saw blade (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/b/b9/S_Steam_Powered_Saw_Blade_%28Earth%29.png/135px-S_Steam_Powered_Saw_Blade_%28Earth%29.png',
  's steam powered spear (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5d/S_Steam_Powered_Spear_%28Earth%29.png/135px-S_Steam_Powered_Spear_%28Earth%29.png',
  's steam powered staff (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/4/41/S_Steam_Powered_Staff_%28Earth%29.png/135px-S_Steam_Powered_Staff_%28Earth%29.png',
  'strict nozzle': 'https://static.miraheze.org/cravesagawiki/thumb/5/57/Strict_Nozzle.png/135px-Strict_Nozzle.png',
  'white lion axe': 'https://static.miraheze.org/cravesagawiki/thumb/6/69/White_Lion_Axe.png/135px-White_Lion_Axe.png',
  'balthazan axe (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/7/7a/Balthazan_Axe_%28Earth%29.png/135px-Balthazan_Axe_%28Earth%29.png',
  'balthazan bow (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f2/Balthazan_Bow_%28Earth%29.png/135px-Balthazan_Bow_%28Earth%29.png',
  'balthazan cane (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/d/d8/Balthazan_Cane_%28Earth%29.png/135px-Balthazan_Cane_%28Earth%29.png',
  'balthazan dual blade (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/2/28/Balthazan_Dual_Blade_%28Earth%29.png/135px-Balthazan_Dual_Blade_%28Earth%29.png',
  'balthazan grimoire (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/d/de/Balthazan_Grimoire_%28Earth%29.png/135px-Balthazan_Grimoire_%28Earth%29.png',
  'balthazan gun (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5b/Balthazan_Gun_%28Earth%29.png/135px-Balthazan_Gun_%28Earth%29.png',
  'balthazan shield (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/6/62/Balthazan_Shield_%28Earth%29.png/135px-Balthazan_Shield_%28Earth%29.png',
  'balthazan spear (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5a/Balthazan_Spear_%28Earth%29.png/135px-Balthazan_Spear_%28Earth%29.png',
  'balthazan sword (earth)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8f/Balthazan_Sword_%28Earth%29.png/135px-Balthazan_Sword_%28Earth%29.png',
  'ame no tsuzumi (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/f/fd/Ame_no_Tsuzumi_%28Weapon%29.png/135px-Ame_no_Tsuzumi_%28Weapon%29.png',
  'archetic axe (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3d/Archetic_Axe_%28Wind%29.png/135px-Archetic_Axe_%28Wind%29.png',
  'archetic bow (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3a/Archetic_Bow_%28Wind%29.png/135px-Archetic_Bow_%28Wind%29.png',
  'archetic dual blade (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/2/2e/Archetic_Dual_Blade_%28Wind%29.png/135px-Archetic_Dual_Blade_%28Wind%29.png',
  'archetic gun (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/1/15/Archetic_Gun_%28Wind%29.png/135px-Archetic_Gun_%28Wind%29.png',
  'archetic ring (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/1/16/Archetic_Ring_%28Wind%29.png/135px-Archetic_Ring_%28Wind%29.png',
  'archetic shield (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f5/Archetic_Shield_%28Wind%29.png/135px-Archetic_Shield_%28Wind%29.png',
  'archetic spear (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/0/03/Archetic_Spear_%28Wind%29.png/135px-Archetic_Spear_%28Wind%29.png',
  'archetic staff (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/7/77/Archetic_Staff_%28Wind%29.png/135px-Archetic_Staff_%28Wind%29.png',
  'archetic sword (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5e/Archetic_Sword_%28Wind%29.png/135px-Archetic_Sword_%28Wind%29.png',
  'carro crown': 'https://static.miraheze.org/cravesagawiki/thumb/3/35/Carro_Crown.png/135px-Carro_Crown.png',
  'durandal (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/3/31/Durandal_%28Weapon%29.png/135px-Durandal_%28Weapon%29.png',
  'experiment number no.0020': 'https://static.miraheze.org/cravesagawiki/thumb/b/b2/Experiment_Number_NO.0020.png/135px-Experiment_Number_NO.0020.png',
  'god bow': 'https://static.miraheze.org/cravesagawiki/thumb/a/a7/God_Bow.png/135px-God_Bow.png',
  'gram (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/e/eb/Gram_%28Weapon%29.png/135px-Gram_%28Weapon%29.png',
  'historian\'s wing': 'https://static.miraheze.org/cravesagawiki/thumb/3/39/Historian%27s_Wing.png/135px-Historian%27s_Wing.png',
  'kusanagi no tsurugi': 'https://static.miraheze.org/cravesagawiki/thumb/4/4d/Kusanagi_no_Tsurugi.png/135px-Kusanagi_no_Tsurugi.png',
  'lantern spear': 'https://static.miraheze.org/cravesagawiki/thumb/7/7a/Lantern_Spear.png/135px-Lantern_Spear.png',
  'mad wolf\'s hurricane': 'https://static.miraheze.org/cravesagawiki/thumb/7/70/Mad_Wolf%27s_Hurricane.png/135px-Mad_Wolf%27s_Hurricane.png',
  'mad wolf\'s magic lance': 'https://static.miraheze.org/cravesagawiki/thumb/b/b3/Mad_Wolf%27s_Magic_Lance.png/135px-Mad_Wolf%27s_Magic_Lance.png',
  'merry festival taiko sticks': 'https://static.miraheze.org/cravesagawiki/thumb/e/e7/Merry_Festival_Taiko_Sticks.png/135px-Merry_Festival_Taiko_Sticks.png',
  'raging wind - great storm spear': 'https://static.miraheze.org/cravesagawiki/thumb/5/5e/Raging_Wind_-_Great_Storm_Spear.png/135px-Raging_Wind_-_Great_Storm_Spear.png',
  'regio': 'https://static.miraheze.org/cravesagawiki/thumb/c/cc/Regio.png/135px-Regio.png',
  'romulus\' spear': 'https://static.miraheze.org/cravesagawiki/thumb/8/85/Romulus%27_Spear.png/135px-Romulus%27_Spear.png',
  'true necromancy\'s green flame spear': 'https://static.miraheze.org/cravesagawiki/thumb/7/74/True_Necromancy%27s_Green_Flame_Spear.png/135px-True_Necromancy%27s_Green_Flame_Spear.png',
  'wind dog ear helmet': 'https://static.miraheze.org/cravesagawiki/thumb/2/2f/Wind_Dog_Ear_Helmet.png/135px-Wind_Dog_Ear_Helmet.png',
  'burgundy bow': 'https://static.miraheze.org/cravesagawiki/thumb/4/44/Burgundy_Bow.png/135px-Burgundy_Bow.png',
  'festival shooting gallery bow': 'https://static.miraheze.org/cravesagawiki/thumb/0/00/Festival_Shooting_Gallery_Bow.png/135px-Festival_Shooting_Gallery_Bow.png',
  'gorblade masterpiece no. 3': 'https://static.miraheze.org/cravesagawiki/thumb/5/5e/Gorblade_Masterpiece_No._3.png/135px-Gorblade_Masterpiece_No._3.png',
  'haekingr (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/6/67/Haekingr_%28Weapon%29.png/135px-Haekingr_%28Weapon%29.png',
  'ivan\'s training outfit': 'https://static.miraheze.org/cravesagawiki/thumb/0/0c/Ivan%27s_Training_Outfit.png/135px-Ivan%27s_Training_Outfit.png',
  'lion serpent\'s claw (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/4/4e/Lion_Serpent%27s_Claw_%28Wind%29.png/135px-Lion_Serpent%27s_Claw_%28Wind%29.png',
  'lion serpent\'s eye (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/8/82/Lion_Serpent%27s_Eye_%28Wind%29.png/135px-Lion_Serpent%27s_Eye_%28Wind%29.png',
  'lion serpent\'s fang (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/5/51/Lion_Serpent%27s_Fang_%28Wind%29.png/135px-Lion_Serpent%27s_Fang_%28Wind%29.png',
  'lion serpent\'s horn (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/7/7b/Lion_Serpent%27s_Horn_%28Wind%29.png/135px-Lion_Serpent%27s_Horn_%28Wind%29.png',
  'lion serpent\'s lion head (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/1/15/Lion_Serpent%27s_Lion_Head_%28Wind%29.png/135px-Lion_Serpent%27s_Lion_Head_%28Wind%29.png',
  'lion serpent\'s mouth (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/4/44/Lion_Serpent%27s_Mouth_%28Wind%29.png/135px-Lion_Serpent%27s_Mouth_%28Wind%29.png',
  'lion serpent\'s spine (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0d/Lion_Serpent%27s_Spine_%28Wind%29.png/135px-Lion_Serpent%27s_Spine_%28Wind%29.png',
  'lion serpent\'s tail (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e0/Lion_Serpent%27s_Tail_%28Wind%29.png/135px-Lion_Serpent%27s_Tail_%28Wind%29.png',
  'lion serpent\'s wing (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/c/cc/Lion_Serpent%27s_Wing_%28Wind%29.png/135px-Lion_Serpent%27s_Wing_%28Wind%29.png',
  'modified magic broom alters': 'https://static.miraheze.org/cravesagawiki/thumb/1/1a/Modified_Magic_Broom_AlterS.png/135px-Modified_Magic_Broom_AlterS.png',
  'nochen\'s sword': 'https://static.miraheze.org/cravesagawiki/thumb/5/5e/Nochen%27s_sword.png/135px-Nochen%27s_sword.png',
  'pen blade of diligence': 'https://static.miraheze.org/cravesagawiki/thumb/c/cf/Pen_Blade_of_Diligence.png/135px-Pen_Blade_of_Diligence.png',
  'ugou (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/7/77/Ugou_%28Weapon%29.png/135px-Ugou_%28Weapon%29.png',
  'bondage chain': 'https://static.miraheze.org/cravesagawiki/thumb/5/54/Bondage_Chain.png/135px-Bondage_Chain.png',
  'my dear exca': 'https://static.miraheze.org/cravesagawiki/thumb/4/43/My_Dear_Exca.png/135px-My_Dear_Exca.png',
  'roll the two dice': 'https://static.miraheze.org/cravesagawiki/thumb/b/b3/Roll_The_Two_Dice.png/135px-Roll_The_Two_Dice.png',
  's steam powered axe (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/d/da/S_Steam_Powered_Axe_%28Wind%29.png/135px-S_Steam_Powered_Axe_%28Wind%29.png',
  's steam powered blade (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/0/08/S_Steam_Powered_Blade_%28Wind%29.png/135px-S_Steam_Powered_Blade_%28Wind%29.png',
  's steam powered bow (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/9/94/S_Steam_Powered_Bow_%28Wind%29.png/135px-S_Steam_Powered_Bow_%28Wind%29.png',
  's steam powered gauntlet (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/a/af/S_Steam_Powered_Gauntlet_%28Wind%29.png/135px-S_Steam_Powered_Gauntlet_%28Wind%29.png',
  's steam powered gun (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a4/S_Steam_Powered_Gun_%28Wind%29.png/135px-S_Steam_Powered_Gun_%28Wind%29.png',
  's steam powered magic tome (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f6/S_Steam_Powered_Magic_Tome_%28Wind%29.png/135px-S_Steam_Powered_Magic_Tome_%28Wind%29.png',
  's steam powered saw blade (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/0/02/S_Steam_Powered_Saw_Blade_%28Wind%29.png/135px-S_Steam_Powered_Saw_Blade_%28Wind%29.png',
  's steam powered spear (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/5/56/S_Steam_Powered_Spear_%28Wind%29.png/135px-S_Steam_Powered_Spear_%28Wind%29.png',
  's steam powered staff (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/9/9b/S_Steam_Powered_Staff_%28Wind%29.png/135px-S_Steam_Powered_Staff_%28Wind%29.png',
  'balthazan axe (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e4/Balthazan_Axe_%28Wind%29.png/135px-Balthazan_Axe_%28Wind%29.png',
  'balthazan bow (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/1/13/Balthazan_Bow_%28Wind%29.png/135px-Balthazan_Bow_%28Wind%29.png',
  'balthazan cane (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/4/44/Balthazan_Cane_%28Wind%29.png/135px-Balthazan_Cane_%28Wind%29.png',
  'balthazan dual blade (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1d/Balthazan_Dual_Blade_%28Wind%29.png/135px-Balthazan_Dual_Blade_%28Wind%29.png',
  'balthazan grimoire (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a9/Balthazan_Grimoire_%28Wind%29.png/135px-Balthazan_Grimoire_%28Wind%29.png',
  'balthazan gun (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ed/Balthazan_Gun_%28Wind%29.png/135px-Balthazan_Gun_%28Wind%29.png',
  'balthazan shield (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0c/Balthazan_Shield_%28Wind%29.png/135px-Balthazan_Shield_%28Wind%29.png',
  'balthazan spear (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c0/Balthazan_Spear_%28Wind%29.png/135px-Balthazan_Spear_%28Wind%29.png',
  'balthazan sword (wind)': 'https://static.miraheze.org/cravesagawiki/thumb/d/d7/Balthazan_Sword_%28Wind%29.png/135px-Balthazan_Sword_%28Wind%29.png',
  'archetic axe (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/31/Archetic_Axe_%28Light%29.png/135px-Archetic_Axe_%28Light%29.png',
  'archetic bow (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/31/Archetic_Bow_%28Light%29.png/135px-Archetic_Bow_%28Light%29.png',
  'archetic dual blade (light)': 'https://static.miraheze.org/cravesagawiki/thumb/6/6c/Archetic_Dual_Blade_%28Light%29.png/135px-Archetic_Dual_Blade_%28Light%29.png',
  'archetic gun (light)': 'https://static.miraheze.org/cravesagawiki/thumb/6/67/Archetic_Gun_%28Light%29.png/135px-Archetic_Gun_%28Light%29.png',
  'archetic ring (light)': 'https://static.miraheze.org/cravesagawiki/thumb/9/9f/Archetic_Ring_%28Light%29.png/135px-Archetic_Ring_%28Light%29.png',
  'archetic shield (light)': 'https://static.miraheze.org/cravesagawiki/thumb/5/54/Archetic_Shield_%28Light%29.png/135px-Archetic_Shield_%28Light%29.png',
  'archetic spear (light)': 'https://static.miraheze.org/cravesagawiki/thumb/e/eb/Archetic_Spear_%28Light%29.png/135px-Archetic_Spear_%28Light%29.png',
  'archetic staff (light)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a8/Archetic_Staff_%28Light%29.png/135px-Archetic_Staff_%28Light%29.png',
  'archetic sword (light)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ef/Archetic_Sword_%28Light%29.png/135px-Archetic_Sword_%28Light%29.png',
  'beroa rock': 'https://static.miraheze.org/cravesagawiki/thumb/4/41/Beroa_Rock.png/135px-Beroa_Rock.png',
  'brionac (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/6/60/Brionac_%28Weapon%29.png/135px-Brionac_%28Weapon%29.png',
  'call of spring - staff of azure dragon': 'https://static.miraheze.org/cravesagawiki/thumb/4/40/Call_of_Spring_-_Staff_of_Azure_Dragon.png/135px-Call_of_Spring_-_Staff_of_Azure_Dragon.png',
  'cupid\'s bow': 'https://static.miraheze.org/cravesagawiki/thumb/b/b7/Cupid%27s_Bow.png/135px-Cupid%27s_Bow.png',
  'divine bow of azure dragon': 'https://static.miraheze.org/cravesagawiki/thumb/7/70/Divine_Bow_of_Azure_Dragon.png/135px-Divine_Bow_of_Azure_Dragon.png',
  'excalibur (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8c/Excalibur_%28Weapon%29.png/135px-Excalibur_%28Weapon%29.png',
  'god of love\'s great spear': 'https://static.miraheze.org/cravesagawiki/thumb/0/09/God_of_Love%27s_Great_Spear.png/135px-God_of_Love%27s_Great_Spear.png',
  'greiprfyn': 'https://static.miraheze.org/cravesagawiki/thumb/f/fb/Greiprfyn.png/135px-Greiprfyn.png',
  'hallowed arche\'s heavenly teaching bow': 'https://static.miraheze.org/cravesagawiki/thumb/6/69/Hallowed_Arche%27s_Heavenly_Teaching_Bow.png/135px-Hallowed_Arche%27s_Heavenly_Teaching_Bow.png',
  'holy sword\'s breaching battle cannon': 'https://static.miraheze.org/cravesagawiki/thumb/8/81/Holy_Sword%27s_Breaching_Battle_Cannon.png/135px-Holy_Sword%27s_Breaching_Battle_Cannon.png',
  'holy sword\'s great bow': 'https://static.miraheze.org/cravesagawiki/thumb/d/d6/Holy_sword%27s_Great_Bow.png/135px-Holy_sword%27s_Great_Bow.png',
  'lance de soleil': 'https://static.miraheze.org/cravesagawiki/thumb/1/17/Lance_de_Soleil.png/135px-Lance_de_Soleil.png',
  'magic launcher': 'https://static.miraheze.org/cravesagawiki/thumb/e/e0/Magic_Launcher.png/135px-Magic_Launcher.png',
  'otherworldly\'s light staff': 'https://static.miraheze.org/cravesagawiki/thumb/9/93/Otherworldly%27s_Light_Staff.png/135px-Otherworldly%27s_Light_Staff.png',
  'otherworldly\'s light sword': 'https://static.miraheze.org/cravesagawiki/thumb/4/46/Otherworldly%27s_Light_Sword.png/135px-Otherworldly%27s_Light_Sword.png',
  's magic powered mechanical staff': 'https://static.miraheze.org/cravesagawiki/thumb/3/38/S_Magic_Powered_Mechanical_Staff.png/135px-S_Magic_Powered_Mechanical_Staff.png',
  'yata no kagami (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/f/fa/Yata_no_Kagami_%28Weapon%29.png/135px-Yata_no_Kagami_%28Weapon%29.png',
  'caladbolg (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/c/ca/Caladbolg_%28Weapon%29.png/135px-Caladbolg_%28Weapon%29.png',
  'commander\'s sceptre': 'https://static.miraheze.org/cravesagawiki/thumb/b/be/Commander%27s_Sceptre.png/135px-Commander%27s_Sceptre.png',
  'crazy yellow': 'https://static.miraheze.org/cravesagawiki/thumb/b/b5/Crazy_Yellow.png/135px-Crazy_Yellow.png',
  'full-auto revolver': 'https://static.miraheze.org/cravesagawiki/thumb/b/ba/Full-Auto_Revolver.png/135px-Full-Auto_Revolver.png',
  'jarngreipr (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/e/e3/Jarngreipr_%28Weapon%29.png/135px-Jarngreipr_%28Weapon%29.png',
  'light flower sword of spring breeze': 'https://static.miraheze.org/cravesagawiki/thumb/1/1b/Light_Flower_Sword_of_Spring_Breeze.png/135px-Light_Flower_Sword_of_Spring_Breeze.png',
  'lion serpent\'s claw (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/33/Lion_Serpent%27s_Claw_%28Light%29.png/135px-Lion_Serpent%27s_Claw_%28Light%29.png',
  'lion serpent\'s eye (light)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f4/Lion_Serpent%27s_Eye_%28Light%29.png/135px-Lion_Serpent%27s_Eye_%28Light%29.png',
  'lion serpent\'s fang (light)': 'https://static.miraheze.org/cravesagawiki/thumb/6/6b/Lion_Serpent%27s_Fang_%28Light%29.png/135px-Lion_Serpent%27s_Fang_%28Light%29.png',
  'lion serpent\'s horn (light)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a6/Lion_Serpent%27s_Horn_%28Light%29.png/135px-Lion_Serpent%27s_Horn_%28Light%29.png',
  'lion serpent\'s lion head (light)': 'https://static.miraheze.org/cravesagawiki/thumb/b/b7/Lion_Serpent%27s_Lion_Head_%28Light%29.png/135px-Lion_Serpent%27s_Lion_Head_%28Light%29.png',
  'lion serpent\'s mouth (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/37/Lion_Serpent%27s_Mouth_%28Light%29.png/135px-Lion_Serpent%27s_Mouth_%28Light%29.png',
  'lion serpent\'s spine (light)': 'https://static.miraheze.org/cravesagawiki/thumb/7/78/Lion_Serpent%27s_Spine_%28Light%29.png/135px-Lion_Serpent%27s_Spine_%28Light%29.png',
  'lion serpent\'s tail (light)': 'https://static.miraheze.org/cravesagawiki/thumb/6/68/Lion_Serpent%27s_Tail_%28Light%29.png/135px-Lion_Serpent%27s_Tail_%28Light%29.png',
  'lion serpent\'s wing (light)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8d/Lion_Serpent%27s_Wing_%28Light%29.png/135px-Lion_Serpent%27s_Wing_%28Light%29.png',
  'minister\'s self defense gun': 'https://static.miraheze.org/cravesagawiki/thumb/9/93/Minister%27s_Self_Defense_Gun.png/135px-Minister%27s_Self_Defense_Gun.png',
  'prayer of purity': 'https://static.miraheze.org/cravesagawiki/thumb/8/8f/Prayer_of_Purity.png/135px-Prayer_of_Purity.png',
  'commemorative flag of dojo fubuki': 'https://static.miraheze.org/cravesagawiki/thumb/3/3f/Commemorative_Flag_of_Dojo_Fubuki.png/135px-Commemorative_Flag_of_Dojo_Fubuki.png',
  'lizarion wands': 'https://static.miraheze.org/cravesagawiki/thumb/d/de/Lizarion_Wands.png/135px-Lizarion_Wands.png',
  's steam powered axe (light)': 'https://static.miraheze.org/cravesagawiki/thumb/5/55/S_Steam_Powered_Axe_%28Light%29.png/135px-S_Steam_Powered_Axe_%28Light%29.png',
  's steam powered blade (light)': 'https://static.miraheze.org/cravesagawiki/thumb/b/bc/S_Steam_Powered_Blade_%28Light%29.png/135px-S_Steam_Powered_Blade_%28Light%29.png',
  's steam powered bow (light)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1c/S_Steam_Powered_Bow_%28Light%29.png/135px-S_Steam_Powered_Bow_%28Light%29.png',
  's steam powered gauntlet (light)': 'https://static.miraheze.org/cravesagawiki/thumb/2/23/S_Steam_Powered_Gauntlet_%28Light%29.png/135px-S_Steam_Powered_Gauntlet_%28Light%29.png',
  's steam powered gun (light)': 'https://static.miraheze.org/cravesagawiki/thumb/d/d7/S_Steam_Powered_Gun_%28Light%29.png/135px-S_Steam_Powered_Gun_%28Light%29.png',
  's steam powered magic tome (light)': 'https://static.miraheze.org/cravesagawiki/thumb/2/28/S_Steam_Powered_Magic_Tome_%28Light%29.png/135px-S_Steam_Powered_Magic_Tome_%28Light%29.png',
  's steam powered saw blade (light)': 'https://static.miraheze.org/cravesagawiki/thumb/5/59/S_Steam_Powered_Saw_Blade_%28Light%29.png/135px-S_Steam_Powered_Saw_Blade_%28Light%29.png',
  's steam powered spear (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3f/S_Steam_Powered_Spear_%28Light%29.png/135px-S_Steam_Powered_Spear_%28Light%29.png',
  's steam powered staff (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/39/S_Steam_Powered_Staff_%28Light%29.png/135px-S_Steam_Powered_Staff_%28Light%29.png',
  'balthazan axe (light)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1e/Balthazan_Axe_%28Light%29.png/135px-Balthazan_Axe_%28Light%29.png',
  'balthazan bow (light)': 'https://static.miraheze.org/cravesagawiki/thumb/8/89/Balthazan_Bow_%28Light%29.png/135px-Balthazan_Bow_%28Light%29.png',
  'balthazan cane (light)': 'https://static.miraheze.org/cravesagawiki/thumb/2/2c/Balthazan_Cane_%28Light%29.png/135px-Balthazan_Cane_%28Light%29.png',
  'balthazan dual blade (light)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ec/Balthazan_Dual_Blade_%28Light%29.png/135px-Balthazan_Dual_Blade_%28Light%29.png',
  'balthazan grimoire (light)': 'https://static.miraheze.org/cravesagawiki/thumb/0/05/Balthazan_Grimoire_%28Light%29.png/135px-Balthazan_Grimoire_%28Light%29.png',
  'balthazan gun (light)': 'https://static.miraheze.org/cravesagawiki/thumb/5/51/Balthazan_Gun_%28Light%29.png/135px-Balthazan_Gun_%28Light%29.png',
  'balthazan shield (light)': 'https://static.miraheze.org/cravesagawiki/thumb/7/76/Balthazan_Shield_%28Light%29.png/135px-Balthazan_Shield_%28Light%29.png',
  'balthazan spear (light)': 'https://static.miraheze.org/cravesagawiki/thumb/3/33/Balthazan_Spear_%28Light%29.png/135px-Balthazan_Spear_%28Light%29.png',
  'balthazan sword (light)': 'https://static.miraheze.org/cravesagawiki/thumb/9/9f/Balthazan_Sword_%28Light%29.png/135px-Balthazan_Sword_%28Light%29.png',
  'adamas\'s sickle': 'https://static.miraheze.org/cravesagawiki/thumb/1/12/Adamas%27s_Sickle.png/135px-Adamas%27s_Sickle.png',
  'archetic axe (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/9/94/Archetic_Axe_%28Dark%29.png/135px-Archetic_Axe_%28Dark%29.png',
  'archetic bow (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/a/ac/Archetic_Bow_%28Dark%29.png/135px-Archetic_Bow_%28Dark%29.png',
  'archetic dual blade (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/f/fc/Archetic_Dual_Blade_%28Dark%29.png/135px-Archetic_Dual_Blade_%28Dark%29.png',
  'archetic gun (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/d/d9/Archetic_Gun_%28Dark%29.png/135px-Archetic_Gun_%28Dark%29.png',
  'archetic ring (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/7/70/Archetic_Ring_%28Dark%29.png/135px-Archetic_Ring_%28Dark%29.png',
  'archetic shield (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1b/Archetic_Shield_%28Dark%29.png/135px-Archetic_Shield_%28Dark%29.png',
  'archetic spear (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/d/d3/Archetic_Spear_%28Dark%29.png/135px-Archetic_Spear_%28Dark%29.png',
  'archetic staff (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/7/75/Archetic_Staff_%28Dark%29.png/135px-Archetic_Staff_%28Dark%29.png',
  'archetic sword (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ea/Archetic_Sword_%28Dark%29.png/135px-Archetic_Sword_%28Dark%29.png',
  'ascalon (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f0/Ascalon_%28Weapon%29.png/135px-Ascalon_%28Weapon%29.png',
  'bewitching wings of rafale': 'https://static.miraheze.org/cravesagawiki/thumb/1/1c/Bewitching_Wings_of_Rafale.png/135px-Bewitching_Wings_of_Rafale.png',
  'bounty mace': 'https://static.miraheze.org/cravesagawiki/thumb/0/0d/Bounty_Mace.png/135px-Bounty_Mace.png',
  'bow of artemion': 'https://static.miraheze.org/cravesagawiki/thumb/a/ad/Bow_of_Artemion.png/135px-Bow_of_Artemion.png',
  'cerberus shield': 'https://static.miraheze.org/cravesagawiki/thumb/7/74/Cerberus_Shield.png/135px-Cerberus_Shield.png',
  'champagne shot': 'https://static.miraheze.org/cravesagawiki/thumb/b/bd/Champagne_Shot.png/135px-Champagne_Shot.png',
  'dark energy spear': 'https://static.miraheze.org/cravesagawiki/thumb/1/15/Dark_Energy_Spear.png/135px-Dark_Energy_Spear.png',
  'dragon slayer\'s black double-edged great axe': 'https://static.miraheze.org/cravesagawiki/thumb/1/18/Dragon_Slayer%27s_Black_Double-edged_Great_Axe.png/135px-Dragon_Slayer%27s_Black_Double-edged_Great_Axe.png',
  'f&peace': 'https://static.miraheze.org/cravesagawiki/thumb/a/a5/F%26PEACE.png/135px-F%26PEACE.png',
  'fallen excalibur': 'https://static.miraheze.org/cravesagawiki/thumb/6/61/Fallen_Excalibur.png/135px-Fallen_Excalibur.png',
  'magic cannon brave fish': 'https://static.miraheze.org/cravesagawiki/thumb/f/f0/Magic_Cannon_Brave_Fish.png/135px-Magic_Cannon_Brave_Fish.png',
  'moonlight magical flower barrier': 'https://static.miraheze.org/cravesagawiki/thumb/1/17/Moonlight_Magical_Flower_Barrier.png/135px-Moonlight_Magical_Flower_Barrier.png',
  'njord\'s oar': 'https://static.miraheze.org/cravesagawiki/thumb/6/62/Njord%27s_Oar.png/135px-Njord%27s_Oar.png',
  'rudolphine': 'https://static.miraheze.org/cravesagawiki/thumb/f/f7/Rudolphine.png/135px-Rudolphine.png',
  'shark harpoon': 'https://static.miraheze.org/cravesagawiki/thumb/e/e4/Shark_Harpoon.png/135px-Shark_Harpoon.png',
  'sky rending great bow': 'https://static.miraheze.org/cravesagawiki/thumb/a/ae/Sky_Rending_Great_Bow.png/135px-Sky_Rending_Great_Bow.png',
  'sky rending spear': 'https://static.miraheze.org/cravesagawiki/thumb/c/c9/Sky_Rending_Spear.png/135px-Sky_Rending_Spear.png',
  'varja (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5a/Varja_%28Weapon%29.png/135px-Varja_%28Weapon%29.png',
  'liafail (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/2/2e/Liafail_%28Weapon%29.png/135px-Liafail_%28Weapon%29.png',
  'lion serpent\'s claw (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a1/Lion_Serpent%27s_Claw_%28Dark%29.png/135px-Lion_Serpent%27s_Claw_%28Dark%29.png',
  'lion serpent\'s eye (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/b/b7/Lion_Serpent%27s_Eye_%28Dark%29.png/135px-Lion_Serpent%27s_Eye_%28Dark%29.png',
  'lion serpent\'s fang (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/1/17/Lion_Serpent%27s_Fang_%28Dark%29.png/135px-Lion_Serpent%27s_Fang_%28Dark%29.png',
  'lion serpent\'s horn (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ea/Lion_Serpent%27s_Horn_%28Dark%29.png/135px-Lion_Serpent%27s_Horn_%28Dark%29.png',
  'lion serpent\'s lion head (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/1/1c/Lion_Serpent%27s_Lion_Head_%28Dark%29.png/135px-Lion_Serpent%27s_Lion_Head_%28Dark%29.png',
  'lion serpent\'s mouth (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a9/Lion_Serpent%27s_Mouth_%28Dark%29.png/135px-Lion_Serpent%27s_Mouth_%28Dark%29.png',
  'lion serpent\'s spine (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/0/07/Lion_Serpent%27s_Spine_%28Dark%29.png/135px-Lion_Serpent%27s_Spine_%28Dark%29.png',
  'lion serpent\'s tail (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/e/ef/Lion_Serpent%27s_Tail_%28Dark%29.png/135px-Lion_Serpent%27s_Tail_%28Dark%29.png',
  'lion serpent\'s wing (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/5/5a/Lion_Serpent%27s_Wing_%28Dark%29.png/135px-Lion_Serpent%27s_Wing_%28Dark%29.png',
  'orca\'s splitter': 'https://static.miraheze.org/cravesagawiki/thumb/1/1c/Orca%27s_Splitter.png/135px-Orca%27s_Splitter.png',
  'physician\'s blade': 'https://static.miraheze.org/cravesagawiki/thumb/8/8a/Physician%27s_Blade.png/135px-Physician%27s_Blade.png',
  'samadal wave': 'https://static.miraheze.org/cravesagawiki/thumb/6/60/Samadal_Wave.png/135px-Samadal_Wave.png',
  'senku kunai': 'https://static.miraheze.org/cravesagawiki/thumb/f/f9/Senku_Kunai.png/135px-Senku_Kunai.png',
  'soul arrow': 'https://static.miraheze.org/cravesagawiki/thumb/f/f7/Soul_Arrow.png/135px-Soul_Arrow.png',
  'uas (weapon)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8c/Uas_%28Weapon%29.png/135px-Uas_%28Weapon%29.png',
  'vp ambitions': 'https://static.miraheze.org/cravesagawiki/thumb/0/0d/VP_Ambitions.png/135px-VP_Ambitions.png',
  'holy knight commander\'s bow': 'https://static.miraheze.org/cravesagawiki/thumb/3/30/Holy_Knight_Commander%27s_Bow.png/135px-Holy_Knight_Commander%27s_Bow.png',
  'peiseiger': 'https://static.miraheze.org/cravesagawiki/thumb/c/cd/Peiseiger.png/135px-Peiseiger.png',
  'prisoner\'s rebellion': 'https://static.miraheze.org/cravesagawiki/thumb/4/4b/Prisoner%27s_Rebellion.png/135px-Prisoner%27s_Rebellion.png',
  's steam powered axe (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/1/10/S_Steam_Powered_Axe_%28Dark%29.png/135px-S_Steam_Powered_Axe_%28Dark%29.png',
  's steam powered blade (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/4/4a/S_Steam_Powered_Blade_%28Dark%29.png/135px-S_Steam_Powered_Blade_%28Dark%29.png',
  's steam powered bow (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/c/c8/S_Steam_Powered_Bow_%28Dark%29.png/135px-S_Steam_Powered_Bow_%28Dark%29.png',
  's steam powered gauntlet (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a7/S_Steam_Powered_Gauntlet_%28Dark%29.png/135px-S_Steam_Powered_Gauntlet_%28Dark%29.png',
  's steam powered gun (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0f/S_Steam_Powered_Gun_%28Dark%29.png/135px-S_Steam_Powered_Gun_%28Dark%29.png',
  's steam powered magic tome (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/8/80/S_Steam_Powered_Magic_Tome_%28Dark%29.png/135px-S_Steam_Powered_Magic_Tome_%28Dark%29.png',
  's steam powered saw blade (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/0/0c/S_Steam_Powered_Saw_Blade_%28Dark%29.png/135px-S_Steam_Powered_Saw_Blade_%28Dark%29.png',
  's steam powered spear (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/4/4a/S_Steam_Powered_Spear_%28Dark%29.png/135px-S_Steam_Powered_Spear_%28Dark%29.png',
  's steam powered staff (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3b/S_Steam_Powered_Staff_%28Dark%29.png/135px-S_Steam_Powered_Staff_%28Dark%29.png',
  'balthazan axe (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/7/70/Balthazan_Axe_%28Dark%29.png/135px-Balthazan_Axe_%28Dark%29.png',
  'balthazan bow (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/7/7b/Balthazan_Bow_%28Dark%29.png/135px-Balthazan_Bow_%28Dark%29.png',
  'balthazan cane (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/d/dc/Balthazan_Cane_%28Dark%29.png/135px-Balthazan_Cane_%28Dark%29.png',
  'balthazan dual blade (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/d/db/Balthazan_Dual_Blade_%28Dark%29.png/135px-Balthazan_Dual_Blade_%28Dark%29.png',
  'balthazan grimoire (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/9/9f/Balthazan_Grimoire_%28Dark%29.png/135px-Balthazan_Grimoire_%28Dark%29.png',
  'balthazan gun (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/8/8a/Balthazan_Gun_%28Dark%29.png/135px-Balthazan_Gun_%28Dark%29.png',
  'balthazan shield (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/3/3c/Balthazan_Shield_%28Dark%29.png/135px-Balthazan_Shield_%28Dark%29.png',
  'balthazan spear (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/f/f5/Balthazan_Spear_%28Dark%29.png/135px-Balthazan_Spear_%28Dark%29.png',
  'balthazan sword (dark)': 'https://static.miraheze.org/cravesagawiki/thumb/a/a0/Balthazan_Sword_%28Dark%29.png/135px-Balthazan_Sword_%28Dark%29.png',
    // Add more weapon mappings
  };
  const artifactMapping = {
  'colada tizon': 'https://static.miraheze.org/cravesagawiki/2/26/Colada_Tizon_Icon.png',
  'frey': 'https://static.miraheze.org/cravesagawiki/c/c8/Frey_Icon.png',
  'dahomeyloa': 'https://static.miraheze.org/cravesagawiki/d/d9/Dahomeyloa_Icon.png',
  'gungnir': 'https://static.miraheze.org/cravesagawiki/6/63/Gungnir_Icon.png',
  'kerykeion': 'https://static.miraheze.org/cravesagawiki/8/8d/Kerykeion_Icon.png',
  'ra': 'https://static.miraheze.org/cravesagawiki/d/d5/Ra_Icon.png',
  'sudarshana': 'https://static.miraheze.org/cravesagawiki/e/ea/Sudarshana_Icon.png',
  'xiuhcoatl': 'https://static.miraheze.org/cravesagawiki/e/e6/Xiuhcoatl_Icon.png',
  'akkerte': 'https://static.miraheze.org/cravesagawiki/1/1d/Akkerte_Icon.png',
  'gae bolg': 'https://static.miraheze.org/cravesagawiki/a/ab/Gae_Bolg_Icon.png',
  'guandao': 'https://static.miraheze.org/cravesagawiki/f/f6/Guandao_Icon.png',
  'kabutafel': 'https://static.miraheze.org/cravesagawiki/2/28/Kabutafel_Icon.png',
  'yasakani no magatama': 'https://static.miraheze.org/cravesagawiki/b/bd/Yasakani_no_Magatama_Icon.png',
  '(holy sword\'s sweet love) excalibur': 'https://static.miraheze.org/cravesagawiki/a/a0/%28Holy_Sword%27s_Sweet_Love%29_Excalibur_Icon.png',
  'aegis': 'https://static.miraheze.org/cravesagawiki/b/bc/Aegis_Icon.png',
  'fragarach': 'https://static.miraheze.org/cravesagawiki/b/b0/Fragarach_Icon.png',
  'jakris': 'https://static.miraheze.org/cravesagawiki/e/e6/Jakris_Icon.png',
  'mjolnir': 'https://static.miraheze.org/cravesagawiki/d/db/Mjolnir_Icon.png',
  'ame no tsuzumi': 'https://static.miraheze.org/cravesagawiki/b/b0/Ame_no_Tsuzumi_Icon.png',
  'durandal': 'https://static.miraheze.org/cravesagawiki/4/4e/Durandal_Icon.png',
  'gram': 'https://static.miraheze.org/cravesagawiki/b/bb/Gram_Icon.png',
  'kusanagi': 'https://static.miraheze.org/cravesagawiki/7/76/Kusanagi_Icon.png',
  'romulus': 'https://static.miraheze.org/cravesagawiki/b/b0/Romulus_Icon.png',
  'shinkun': 'https://static.miraheze.org/cravesagawiki/c/c5/Shinkun_Icon.png',
  'brionac': 'https://static.miraheze.org/cravesagawiki/6/67/Brionac_Icon.png',
  'cupid': 'https://static.miraheze.org/cravesagawiki/c/c6/Cupid_Icon.png',
  'excalibur': 'https://static.miraheze.org/cravesagawiki/6/66/Excalibur_Icon.png',
  'jinn': 'https://static.miraheze.org/cravesagawiki/6/61/Jinn_Icon.png',
  'souryu': 'https://static.miraheze.org/cravesagawiki/c/cd/Souryu_Icon.png',
  'yata no kagami': 'https://static.miraheze.org/cravesagawiki/a/a9/Yata_no_Kagami_Icon.png',
  '(bewitched by love) excalibur': 'https://static.miraheze.org/cravesagawiki/e/e4/%28Bewitched_By_Love%29_Excalibur_Icon.png',
  'adamas': 'https://static.miraheze.org/cravesagawiki/6/65/Adamas_Icon.png',
  'artemion': 'https://static.miraheze.org/cravesagawiki/2/24/Artemion_Icon.png',
  'ascalon': 'https://static.miraheze.org/cravesagawiki/4/44/Ascalon_Icon.png',
  'njord': 'https://static.miraheze.org/cravesagawiki/1/10/Njord_Icon.png',
  'varja': 'https://static.miraheze.org/cravesagawiki/6/62/Varja_Icon.png',
  'svalinn': 'https://static.miraheze.org/cravesagawiki/e/e6/Svalinn_Icon.png',
  'azoth': 'https://static.miraheze.org/cravesagawiki/4/44/Azoth_Icon.png',
  'yatsukamizu': 'https://static.miraheze.org/cravesagawiki/1/1e/Yatsukamizu_Icon.png',
  'achilles': 'https://static.miraheze.org/cravesagawiki/d/d9/Achilles_Icon.png',
  'nichouhanpu': 'https://static.miraheze.org/cravesagawiki/2/22/Nichouhanpu_Icon.png',
  'haekingr': 'https://static.miraheze.org/cravesagawiki/9/90/Haekingr_Icon.png',
  'ugou': 'https://static.miraheze.org/cravesagawiki/d/d9/Ugou_Icon.png',
  'caladbolg': 'https://static.miraheze.org/cravesagawiki/5/5d/Caladbolg_Icon.png',
  'jarngreipr': 'https://static.miraheze.org/cravesagawiki/f/f6/Jarngreipr_Icon.png',
  'liafail': 'https://static.miraheze.org/cravesagawiki/1/1f/Liafail_Icon.png',
  'uas': 'https://static.miraheze.org/cravesagawiki/e/e1/Uas_Icon.png',
    // Add more artifact mappings
  };
  // Set a cookie
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  // Retrieve a cookie
  function getCookie(name) {
    const cookieValue = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(name))
      ?.split('=')[1];
    return cookieValue ? decodeURIComponent(cookieValue) : null;
  }

  // Set input and image mapping
  function setInputImageMapping(inputs, images, mapping, cookieName) {
    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        const inputValue = input.value.toLowerCase();
        images[index].src = mapping[inputValue] || '';
        setCookie(cookieName + index, inputValue, 30); // Save the input value in a cookie
      });

      const cookieValue = getCookie(cookieName + index);
      if (cookieValue) {
        input.value = cookieValue;
        images[index].src = mapping[cookieValue] || '';
      }
    });
  }

  // Toggle selection and save to local storage
  function handleItemSelection(item, index) {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      const isSelected = item.classList.contains('selected');
      // Save selection to local storage
      localStorage.setItem(`character-${index}`, isSelected ? '1' : '0');
    });

    // Retrieve and set selection from local storage
    const localStorageValue = localStorage.getItem(`character-${index}`);
    if (localStorageValue === '1') {
      item.classList.add('selected');
    }
  }

  // Initialize input and image mapping
  const soulmateInputs = document.querySelectorAll('.soulmate-input');
  const soulmateImages = document.querySelectorAll('.soulmate-image');
  const weaponInputs = document.querySelectorAll('.weapon-input');
  const weaponImages = document.querySelectorAll('.weapon-image');
  const artifactInputs = document.querySelectorAll('.artifact-input');
  const artifactImages = document.querySelectorAll('.artifact-image');

  // Initialize item selection
  const items = document.querySelectorAll('.item');
  items.forEach((item, index) => {
    handleItemSelection(item, index);
  });

  // Set input and image mapping
  setInputImageMapping(soulmateInputs, soulmateImages, soulmateMapping, 'soulmate');
  setInputImageMapping(weaponInputs, weaponImages, weaponMapping, 'weapon');
  setInputImageMapping(artifactInputs, artifactImages, artifactMapping, 'artifact');

  const elementToggles = document.querySelectorAll('.element-toggle');
  const teamBuilder = document.querySelector('.team-builder');

  elementToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const elementClass = toggle.classList[1]; // Get the second class, e.g., "fire"
      teamBuilder.className = 'team-builder selected ' + elementClass; // Add "selected" class
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const showAllToggle = document.querySelector('.show-all');
    const itemsToReset = document.querySelectorAll('.item');

    showAllToggle.addEventListener('click', () => {
      itemsToReset.forEach(item => {
        item.classList.remove('selected');
        localStorage.removeItem(item.getAttribute('data-storage-key'));
      });
    });
  });

  const showAllToggle = document.querySelector('.element-toggle.show-all'); // New toggle for Show All

  showAllToggle.addEventListener('click', () => {
    location.reload(); // Refresh the page
  });

  const fireToggle = document.querySelector('.element-toggle.fire');
  const waterToggle = document.querySelector('.element-toggle.water');
  const windToggle = document.querySelector('.element-toggle.wind');
  const earthToggle = document.querySelector('.element-toggle.earth');
  const lightToggle = document.querySelector('.element-toggle.light');
  const darkToggle = document.querySelector('.element-toggle.dark');
  
  const allItems = document.querySelectorAll('.item');

  fireToggle.addEventListener('click', () => {
    toggleItems('fire');
  });

  waterToggle.addEventListener('click', () => {
    toggleItems('water');
  });

  windToggle.addEventListener('click', () => {
    toggleItems('wind');
  });

  earthToggle.addEventListener('click', () => {
    toggleItems('earth');
  });

  lightToggle.addEventListener('click', () => {
    toggleItems('light');
  });

  darkToggle.addEventListener('click', () => {
    toggleItems('dark');
  });

  function toggleItems(elementClass) {
    allItems.forEach(item => {
      if (elementClass === 'all') {
        item.style.display = 'block';
      } else if (item.classList.contains(elementClass)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Function to encode data into URL parameters
  function encodeDataToURL(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelector('.share-button');
    const shareUrlInput = document.querySelector('.share-url-input');
    const soulmateInputs = document.querySelectorAll('.soulmate-input');
    const weaponInputs = document.querySelectorAll('.weapon-input');
    const artifactInputs = document.querySelectorAll('.artifact-input');
    const selectedItems = document.querySelectorAll('.item.selected');

    shareButton.addEventListener('click', () => {
      const dataToShare = {}; // Collect data to share

      // Get input values and selections
      soulmateInputs.forEach((input, index) => {
        dataToShare[`soulmate-${index}`] = input.value;
      });

      weaponInputs.forEach((input, index) => {
        dataToShare[`weapon-${index}`] = input.value;
      });

      artifactInputs.forEach((input, index) => {
        dataToShare[`artifact-${index}`] = input.value;
      });

      selectedItems.forEach((item, index) => {
        dataToShare[`character-${index}`] = '1';
      });

      const encodedData = encodeDataToURL(dataToShare);
      const shareableURL = window.location.origin + window.location.pathname + '?' + encodedData;
      
      // Display the URL in the input element
      shareUrlInput.value = shareableURL;
      shareUrlInput.select();
    });
  });
