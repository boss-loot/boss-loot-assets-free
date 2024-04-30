import { MODULE_NAME } from './constants.js';

/*
1. <type> {weapon, equipment, consumable, tool, steampunk, spell, ability, misc, token}
2. <range> {melee, range, ray, circle, cone}
3. <asset_type> {sword, hat, etc}*
4. <action> {attack}*
5. <optional> {trail}*
6. <optional_color> {color_name}
7. <optional_number> {01, 02, 03}
*/

export const database = {};

export async function createDatabase(path) {
  database._templates = {
    // Grid size, start point, end point
    default: [200, 0, 0],
    ranged: [200, 200, 200],
    melee: [200, 300, 300],
    ray: [100, 0, 0],
    line100: [100, 50, 150],
    line200: [200, 200, 200],
  };

  /* -------------------------------------------- */
  // EQUIPMENT
  /* -------------------------------------------- */
  database.equipment = {
    glove1: {
      attack1: {
        slap: {
          trail1: {
            _template: 'melee',
            color1: `${path}/${MODULE_NAME}/artwork/02-equipment/glove/Glove_of_Healing_Slap_Trail_ATTACK_1_800x800.webm`,
          },
        },
      },
    },
    chain1: {
      metal: {
        spin3: {
          loop: {
            grey: `${path}/${MODULE_NAME}/artwork/02-equipment/chain/Chain_3_Round_1_METAL_1200x1200.webm`,
          },
        },
      },
    },
    chain2: {
      metal: {
        spin1: {
          line: {
            grey: `${path}/${MODULE_NAME}/artwork/02-equipment/chain/Chain_1_Line_1_METAL_1200x100.webm`,
          },
        },
      },
    },
    coin1: {
      flip: {
        head: {
          yellow: `${path}/${MODULE_NAME}/artwork/02-equipment/coin/Coin_1_Flip_Front_GOLD_1200x1200.webm`,
        },
      },
    },
    helm1: {
      pyro: {
        fire: {
          flare: {
            rotate: `${path}/${MODULE_NAME}/artwork/02-equipment/helm/Pyro_Head_Rotate_45degrees_1200x1200.webm`,
          },
        },
      },
    },
  };

  /* -------------------------------------------- */
  // STEAMPUNK
  /* -------------------------------------------- */
  database.steampunk = {
    heart1: {
      pulse: {
        shell: {
          yellow: `${path}/${MODULE_NAME}/artwork/07-steampunk/clock/Clockwork_Heart_Shell_1_1200x1200.webm`,
        },
      },
    },
    gears1: {
      clockwork1: {
        yellow: `${path}/${MODULE_NAME}/artwork/07-steampunk/clock/Clockwork_Gears_1_1200x1200.webm`,
      },
      blades1: {
        pulse: {
          yellow: `${path}/${MODULE_NAME}/artwork/07-steampunk/clock/Clockwork_Blades_1_1200x1200.webm`,
        },
      },
    },
  };

  /* -------------------------------------------- */
  // ABILITY
  /* -------------------------------------------- */
  database.ability = {
    madness: {
      head1: {
        laughter1: {
          green: `${path}/${MODULE_NAME}/artwork/06-ability/madness/toyama-head-laughter.webm`,
        },
      },
    },
    grow: {
      fox1: {
        tail1: {
          swing: {
            brown: `${path}/${MODULE_NAME}/artwork/06-ability/grow/Tail_1_Fox_1_BROWN_1200x1200.webm`,
          },
        },
      },
    },
  };

  /* -------------------------------------------- */
  // MISC
  /* -------------------------------------------- */
  database.misc = {
    flare1: {
      point1: {
        red: `${path}/${MODULE_NAME}/artwork/08-misc/flare/Flare_1_RED_1_1200x1200.webm`,
      },
    },
    flare2: {
      star1: {
        blue: `${path}/${MODULE_NAME}/artwork/08-misc/flare/Star_1_Flare_1_BLUE_1_1200x1200.webm`,
      },
    },
    droplet1: {
      blood: {
        buble: {
          red: {
            1: `${path}/${MODULE_NAME}/artwork/08-misc/droplet/Blood_1_Bubbles_1_1200x1200.webm`,
          },
        },
      },
    },
    fire1: {
      loop: {
        orange: `${path}/${MODULE_NAME}/artwork/08-misc/fire/Frame_1_Border_1_Fire_ORANGE_1200x1200.webm`,
      },
    },
    spell: {
      bubble1: {
        explosion1: {
          fire: {
            above: {
              orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/cast/Bubble_1_Fire_Explosion_Front_RED_ORANGE_1200x1200.webm`,
            },
          },
        },
      },
      bubble2: {
        explosion1: {
          fire: {
            under: {
              orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/cast/Bubble_1_Fire_Explosion_Under_RED_ORANGE_1200x1200.webm`,
            },
          },
        },
      },
    },
  };

  /* -------------------------------------------- */
  // WEAPON
  /* -------------------------------------------- */
  database.weapon = {
    melee: {
      flail1: {
        attack1: {
          trail1: {
            _template: 'melee',
            green: `${path}/${MODULE_NAME}/artwork/01-weapon/flail/toyama-madness-attack.webm`,
          },
        },
      },
      halberd1: {
        attack1: {
          swing: {
            close: {
              trail1: {
                _template: 'melee',
                yellow: `${path}/${MODULE_NAME}/artwork/01-weapon/halberd/Yarte_Pora_ATTACK_1_TRAIL_1_1200x1200.webm`, // 5ft range
              },
            },
          },
        },
      },
      rapier1: {
        attack1: {
          stab: {
            trail1: {
              _template: 'melee',
              black: `${path}/${MODULE_NAME}/artwork/01-weapon/rapier/Silent_Weaver_ATTACK_1_TRAIL_1_2400x1600.webm`,
            },
          },
        },
      },
      greatsword1: {
        attack1: {
          slam: {
            trail1: {
              _template: 'melee',
              yellow: `${path}/${MODULE_NAME}/artwork/01-weapon/greatsword/Queens_Burden_ATTACK_1_TRAIL_1_1200x1200.webm`,
            },
          },
        },
      },
      spear1: {
        attack1: {
          stab: {
            trail1: {
              _template: 'melee',
              blue: `${path}/${MODULE_NAME}/artwork/01-weapon/spear/Flintfang_Spear_ATTACK_1_5ft_1200x1200.webm`,
            },
          },
        },
      },
      greatclub1: {
        attack1: {
          slam: {
            trail1: {
              _template: 'melee',
              blue: `${path}/${MODULE_NAME}/artwork/01-weapon/greatclub/Greatclub_1_ATTACK_1_TRAIL_1_1200x1200_5ft.webm`,
            },
          },
        },
      },
      greataxe1: {
        attack1: {
          swing: {
            close: {
              trail1: {
                _template: 'melee',
                blue: `${path}/${MODULE_NAME}/artwork/01-weapon/greataxe/Colossus_Cleaver_1_ATTACK_1_5ft_1200x1200.webm`,
              },
            },
          },
        },
      },
    },
    range: {
      spear1: {
        attack1: {
          throw1: {
            impact1: {
              blue: {
                _template: 'ranged',
                '15ft': `${path}/${MODULE_NAME}/artwork/01-weapon/spear/Flintfang_Spear_RANGE_15ft_1000x400.webm`,
                '20ft': `${path}/${MODULE_NAME}/artwork/01-weapon/spear/Flintfang_Spear_RANGE_20ft_1400x400.webm`,
                '30ft': `${path}/${MODULE_NAME}/artwork/01-weapon/spear/Flintfang_Spear_RANGE_30ft_1600x400.webm`,
                '60ft': `${path}/${MODULE_NAME}/artwork/01-weapon/spear/Flintfang_Spear_RANGE_60ft_2800x400.webm`,
                '90ft': `${path}/${MODULE_NAME}/artwork/01-weapon/spear/Flintfang_Spear_RANGE_90ft_4000x400.webm`,
              },
            },
          },
        },
      },
      snipe: {
        arrow1: {
          physical: {
            impact1: {
              blue: {
                _template: 'ranged',
                '05ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Vortex_Arrow_1_05ft_600x400.webm`,
                '15ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Vortex_Arrow_1_15ft_1000x400.webm`,
                '30ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Vortex_Arrow_1_30ft_1600x400.webm`,
                '60ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Vortex_Arrow_1_60ft_2800x400.webm`,
                '90ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Vortex_Arrow_1_90ft_4000x400.webm`,
              },
            },
          },
        },
        arrow2: {
          physical: {
            impact1: {
              red: {
                _template: 'ranged',
                '05ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Blood_Arrow_1_05ft_600x400.webm`,
                '15ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Blood_Arrow_1_15ft_1000x400.webm`,
                '30ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Blood_Arrow_1_30ft_1600x400.webm`,
                '60ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Blood_Arrow_1_60ft_2800x400.webm`,
                '90ft': `${path}/${MODULE_NAME}/artwork/01-weapon/arrow/Blood_Arrow_1_90ft_4000x400.webm`,
              },
            },
          },
        },
      },
      bow1: {
        physical: {
          shot: {
            attack1: {
              blue: `${path}/${MODULE_NAME}/artwork/01-weapon/bow/Void_Vortex_Drawing_1_1500x1200.webm`,
            },
            attack2: {
              blue: `${path}/${MODULE_NAME}/artwork/01-weapon/bow/Void_Vortex_Drawing_2_1500x1200.webm`,
            },
          },
        },
      },
      bow2: {
        physical: {
          shot: {
            attack1: {
              red: `${path}/${MODULE_NAME}/artwork/01-weapon/bow/Bloodseekers_Vengence_Drawing_1_1500x1200.webm`,
            },
          },
        },
      },
    },
  };

  /* -------------------------------------------- */
  // SPELL
  /* -------------------------------------------- */
  database.spell = {
    cast: {
      swirl1: {
        fire1: {
          orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/cast/Spell_Cast_2_Fire_1_ORANGE_1200x1200.webm`,
        },
      },
      circles1: {
        energy1: {
          blue: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/cast/Spell_Cast_1_CIRCLES_1_BLUE_1_1200x1200.webm`,
        },
      },
      circles2: {
        energy1: {
          smoke: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/cast/Energy_1_Wipe_1_Radial_1_Smoke_1_ORANGE_1200x1200.webm`,
          },
        },
      },
    },
    impact: {
      explosion1: {
        smoke1: {
          purple: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/impact/Explosion_2_Radial_PURPLE_1200x1200.webm`,
        },
      },
    },
    template: {
      circle: {
        explosion1: {
          fireball1: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/level3/fireaball/Fireball_1_CARTOON_EXPLOSION_ORANGE_1200x1200.webm`,
          },
        },
        explosion2: {
          shockwave1: {
            ring: {
              fire: {
                orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Shockwave_1_Fire_1_ORANGE_1200x1200.webm`,
              },
            },
          },
        },
        crack1: {
          ground1: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/shock/GroundCrack_1_ORANGE_1200x1200.webm`,
          },
        },
        crack2: {
          ground1: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/shock/Crack_1_CIRCULAR_1_ORANGE_1200x1200.webm`,
          },
        },
        flames1: {
          ground1: {
            loop: {
              orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/GroundFlames_1_ORANGE_LOOP_1200x1200.webm`,
            },
          },
        },
        tornado1: {
          fire1: {
            clockwise: {
              loop: {
                orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Tornado_1_Fire_Spin_Clockwise_CARTOON_LOOP_1200x1200.webm`,
              },
            },
          },
        },
        tornado2: {
          vortex1: {
            hole: {
              clockwise: {
                loop: {
                  black: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/air/Vortex_Hole_1_BLUE_PURPLE_1200x1200.webm`,
                },
              },
            },
          },
        },
        hole1: {
          crack1: {
            dust1: {
              black: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/shock/Hole_1_Dust_1_1200x1200.webm`,
            },
          },
        },
        wave1: {
          energy1: {
            white: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/shock/Wave_1_Radial_1_WHITE_1200x1200.webm`,
          },
        },
        wave2: {
          blood1: {
            splatter: {
              red: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/shock/Blood_1_Splatter_1_1200x1200.webm`,
            },
          },
        },
      },
      line: {
        wall1: {
          fire1: {
            loop: {
              _template: 'ray',
              orange: `${path}/${MODULE_NAME}/artwork/05-spell/level4/wallOfFire/Firewall_1_CARTOON_ORANGE_LOOP_1200x600.webm`,
            },
          },
        },
        crack1: {
          ground1: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/shock/Crack_1_LINE_1_ORANGE_1200x800.webm`,
          },
        },
      },
    },
    melee: {
      radial1: {
        lightning1: {
          shock1: {
            blue: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/lightning/Radial_Lightning_Shock_01_1200x1200.webm`,
          },
        },
      },
      hypnotic1: {
        spiral1: {
          loop: {
            purple: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Spiral_Hypnotic_Purple_01_1200x1200.webm`,
          },
        },
      },
      arm1: {
        hand1: {
          arcane: {
            attack1: {
              force: {
                push: {
                  blue: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/arm/Hand_1_Push_1_BLUE_1200x1200.webm`,
                },
              },
            },
          },
        },
      },
      heal1: {
        particles1: {
          glow: {
            green: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/heal/Heal_1_BLUE_GREEN_1200x1200.webm`,
          },
        },
      },
      breath1: {
        fire1: {
          attack1: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Breath_Weapon_1_Fire_CARTOON_ORANGE_1200x1200.webm`,
          },
        },
      },
      shield1: {
        flame1: {
          loop: {
            orange: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/FlameShield_1_ORANGE_LOOP_1200x1200.webm`,
          },
        },
      },
    },
    range: {
      snipe: {
        burst1: {
          dust: {
            impact1: {
              intro: {
                white: {
                  _template: 'ranged',
                  '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/air/Dust_1_Burst_1_Snipe_1_WHITE_RANGE_05ft_600x400.webm`,
                  '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/air/Dust_1_Burst_1_Snipe_1_WHITE_RANGE_15ft_1000x400.webm`,
                  '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/air/Dust_1_Burst_1_Snipe_1_WHITE_RANGE_30ft_1600x400.webm`,
                  '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/air/Dust_1_Burst_1_Snipe_1_WHITE_RANGE_60ft_2800x400.webm`,
                  '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/air/Dust_1_Burst_1_Snipe_1_WHITE_RANGE_90ft_4000x400.webm`,
                },
              },
            },
          },
        },
      },
      ray: {
        burst2: {
          blast: {
            missile: {
              pyro: {
                impact1: {
                  intro: {
                    orange: {
                      _template: 'ranged',
                      '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Pyrobast_1_ORANGE_RANGE_05ft_600x400.webm`,
                      '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Pyrobast_1_ORANGE_RANGE_15ft_1000x400.webm`,
                      '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Pyrobast_1_ORANGE_RANGE_30ft_1600x400.webm`,
                      '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Pyrobast_1_ORANGE_RANGE_60ft_2800x400.webm`,
                      '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Pyrobast_1_ORANGE_RANGE_90ft_4000x400.webm`,
                    },
                  },
                },
              },
            },
          },
        },
        burst3: {
          fire: {
            impact1: {
              intro: {
                yellow: {
                  _template: 'ranged',
                  '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/EmberGaze_Ray_1_YELLOW_RANGE_05ft_600x400.webm`,
                  '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/EmberGaze_Ray_1_YELLOW_RANGE_15ft_1000x400.webm`,
                  '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/EmberGaze_Ray_1_YELLOW_RANGE_30ft_1600x400.webm`,
                  '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/EmberGaze_Ray_1_YELLOW_RANGE_60ft_2800x400.webm`,
                  '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/EmberGaze_Ray_1_YELLOW_RANGE_90ft_4000x400.webm`,
                },
              },
            },
          },
        },
        burst4: {
          fire: {
            impact1: {
              intro: {
                yellow: {
                  _template: 'ranged',
                  '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Beam_1_YELLOW_RANGE_05ft_600x400.webm`,
                  '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Beam_1_YELLOW_RANGE_15ft_1000x400.webm`,
                  '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Beam_1_YELLOW_RANGE_30ft_1600x400.webm`,
                  '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Beam_1_YELLOW_RANGE_60ft_2800x400.webm`,
                  '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/fire/Beam_1_YELLOW_RANGE_90ft_4000x400.webm`,
                },
              },
            },
          },
        },
        beam1: {
          sinusoidal: {
            intro: {
              purple: {
                _template: 'ranged',
                '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Intro_Beam_Hypnotic_Purple_01_05ft_600x400.webm`,
                '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Intro_Beam_Hypnotic_Purple_01_15ft_1000x400.webm`,
                '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Intro_Beam_Hypnotic_Purple_01_30ft_1600x400.webm`,
                '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Intro_Beam_Hypnotic_Purple_01_60ft_2800x400.webm`,
                '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Intro_Beam_Hypnotic_Purple_01_90ft_4000x400.webm`,
              },
            },
          },
        },
      },
      link: {
        beam1: {
          sinusoidal: {
            loop: {
              purple: {
                _template: 'ranged',
                '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Loop_Beam_Hypnotic_Purple_01_05ft_600x400.webm`,
                '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Loop_Beam_Hypnotic_Purple_01_15ft_1000x400.webm`,
                '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Loop_Beam_Hypnotic_Purple_01_30ft_1600x400.webm`,
                '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Loop_Beam_Hypnotic_Purple_01_60ft_2800x400.webm`,
                '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/hypnotic/Range_Loop_Beam_Hypnotic_Purple_01_90ft_4000x400.webm`,
              },
            },
          },
        },
      },
    },
    weapon: {
      melee: {
        sword1: {
          arcane: {
            attack1: {
              swing: {
                trail1: {
                  _template: 'melee',
                  blue: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/sword/Mindflame_Incision_ATTACK_1_1200x1200.webm`,
                },
              },
            },
          },
        },
      },
      range: {
        snipe: {
          bullet1: {
            arrow1: {
              arcane: {
                impact1: {
                  blue: {
                    _template: 'ranged',
                    '05ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/arrow/Arrow_Arcane_Shot_Blue_1_05ft_600x400.webm`,
                    '15ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/arrow/Arrow_Arcane_Shot_Blue_1_15ft_1000x400.webm`,
                    '30ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/arrow/Arrow_Arcane_Shot_Blue_1_30ft_1600x400.webm`,
                    '60ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/arrow/Arrow_Arcane_Shot_Blue_1_60ft_2800x400.webm`,
                    '90ft': `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/arrow/Arrow_Arcane_Shot_Blue_1_90ft_4000x400.webm`,
                  },
                },
              },
            },
          },
        },
        bow1: {
          arcane: {
            shot: {
              attack1: {
                blue: `${path}/${MODULE_NAME}/artwork/05-spell/homebrew/arcane/bow/Bow_Arrow_Drawing_Blue_1_1500x1200.webm`,
              },
            },
          },
        },
      },
    },
  };

  /* -------------------------------------------- */
  // TOKEN
  /* -------------------------------------------- */
  // database.token = {
  // };
}
