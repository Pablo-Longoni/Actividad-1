export default class Game extends Phaser.Scene {
    constructor() {
      super("game");
      
    }
    init() {

        this.suma = 0;
        this.nivel = 1;
    }
    preload() {

        this.load.image("pala", "./public/pala.jpg" );
        this.load.image("pelota", "./public/pelota.png");

    }

    create(){


        this.pala = this.physics.add.sprite( 300, 300, "pala").setCollideWorldBounds(true);

        this.pelota = this.physics.add.sprite( 300, 120, "pelota").setBounce(1).setCollideWorldBounds(true);

        this.obstaculo = this.physics.add.staticGroup();

        this.physics.add.collider( 
            this.pelota, 
            this.pala,
            this.sumarPuntos,
            null,
            this
            ); 

        this.physics.add.collider(this.pelota, this.obstaculo); 


        this.physics.world.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height);

        this.cursors = this.input.keyboard.createCursorKeys(); 

        this.leveltText = this.add.text (20, 20, "NIVEL: ", {
            fontsize: "32 px",
            fill: "#ffffff",
        }); 

        this.scoreText = this.add.text (500, 20, "TOQUES: ", {
            fontsize: "32 px",
            fill: "#ffffff",
        });

    }

    update(){
        if (this.cursors.left.isDown) {
            this.pala.setVelocityX(-250);
          }

          else if (this.cursors.right.isDown) {
            this.pala.setVelocityX(250);
          } 
          
          else {
            this.pala.setVelocityX(0);
          }
      
          if (this.cursors.up.isDown) {
            this.pala.setVelocityY(-250);
          }
          else if (this.cursors.down.isDown) {
            this.pala.setVelocityY(250);
          }

          if (this.suma >= 10) { 
            this.nivel++; 
            this.leveltText.setText("NIVEL: " + this.nivel); 
            this.addObstaculo(); 
            this.suma = 0; 
            //this.pelota.setVelocityY(this.pelota.body.setVelocityY * 1.1);

            const color = Phaser.Display.Color.RandomRGB(50, 200);
            this.cameras.main.setBackgroundColor(color.color);

          }

    }

    sumarPuntos( pala, pelota){

    this.suma++; 

    this.scoreText.setText (
        "TOQUES: " + this.suma
    );
    }

    addObstaculo (){

        const RandomX = Phaser.Math.RND.between (0, 600);
        const RandomY = Phaser.Math.RND.between (50, 300);
        const RandomScale = Phaser.Math.RND.between (1, 2);

        this.obstaculo.create(RandomX, RandomY, "pala").setScale(RandomScale);

        console.log( "agregar obstaculo");
    }

}

