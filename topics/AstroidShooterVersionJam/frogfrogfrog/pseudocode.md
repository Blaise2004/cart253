START GAME
Initialize canvas
Initialize spaceship at bottom
Initialize asteroids
Initialize score, lives, money, multiplier
Initialize level, backgrounds, and music

MAIN LOOP (every frame)
Draw background
Draw spaceship at mouse x
Draw bullets and move them upward
Draw asteroids and move them sideways
Check bullet-asteroid collisions
If collision:
Destroy asteroid
Add money \* multiplier
Increase score
Check if asteroid reaches other side
If yes:
Subtract a life
Reset asteroid
Draw UI: score, lives, money, multiplier, level
Check level progression
If money >= threshold:
Unlock next level
Change background/music
Check win condition
If final level goal reached:
Show win screen
Check lose condition
If lives <= 0:
Show lose screen

MOUSE INPUT
If mouse clicked and laser is idle:
Shoot bullet from spaceship
If mouse clicked on buttons (start, level select, free play):
Update scene, level, or start game

spaceship
x, y, size
laser: x, y, size, speed, state, hit

asteroid
x, y, size, speed, score_value

bullet
x, y, size, speed, active

player
score
lives
money
multiplier

game
scene
level
goal
backgrounds
music

- Dynamic asteroid sizes and speeds per level
- Money multipliers for score milestones
- Level-specific music and backgrounds
- Free play mode
- Special goal for final level
