import { ArrowLeft, Gamepad2, Target, Zap, Palette, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";

const KitsumonProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl">
                🎮
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Game Design Project</p>
                <h1 className="text-3xl font-bold text-foreground">Kitsumon</h1>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A multiplayer online battle arena (MOBA) that blends fast-paced tactical combat with creature collection and elemental strategy. Led visual design across UI/UX, in-game HUD, animation, and environmental textures to create a magical-but-playable experience.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-full">Game UI/UX</span>
              <span className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-full">MOBA Design</span>
              <span className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-full">Animation</span>
              <span className="px-4 py-2 text-sm font-medium bg-muted text-muted-foreground rounded-full">Texture Art</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <Gamepad2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Gameplay HUD Design</h3>
              <p className="text-muted-foreground">Complete battle HUD with status effects, cooldowns, team health, minimap, and inventory systems optimized for high-pressure combat.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Modular UI System</h3>
              <p className="text-muted-foreground">Comprehensive interface for menus, ability trees, and player loadouts with cross-platform responsiveness for both mouse/keyboard and controller inputs.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibtml-semibold text-foreground mb-3">Real-time Animations</h3>
              <p className="text-muted-foreground">Custom ability animations and status effect markers with impact feedback, plus scrollable ability preview system with energy/mana tracking.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Palette className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Environmental Textures</h3>
              <p className="text-muted-foreground">Hand-painted texture sets for characters, items, and environments with consistent color grading and elemental theming.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Visual Language System</h3>
              <p className="text-muted-foreground">Comprehensive iconography and visual communication across combat, exploration, and inventory flows with consistent design tokens.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <Trophy className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Notification Systems</h3>
              <p className="text-muted-foreground">In-game notification banners and score displays with animated transitions and real-time feedback for all player actions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-12">Design Process</h2>
          
          <div className="space-y-16">
            {/* Gameplay HUD */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">1. Gameplay HUD</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Crafted a dynamic and intuitive battle HUD that balanced information density with moment-to-moment usability. The layout features team and enemy avatars with health bars, centralized match score and timer, and a fully interactive ability HUD with cooldown, energy, and hitpoint tracking.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every icon, bar, and status was built to read at a glance, even in high-pressure team fights, ensuring players could focus on strategy rather than interface navigation.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-0 text-center overflow-hidden">
                <img src="/ksm-hud.png" alt="Kitsumon Gameplay HUD" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* Player Ability System */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg p-0 text-center order-2 lg:order-1 overflow-hidden">
                <img src="/ksm-inventory.png" alt="Kitsumon Ability & Inventory Design" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-xl font-semibold text-foreground mb-4">2. Player Ability Deck & Inventory</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Designed an 8-slot inventory system with contextual keybinds, visual cooldown states, and inventory-specific logic for passive vs. active gear. The ability bar includes 5 custom abilities, basic attack, parry/block, and handheld equipment slot.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each slot features energy and cooldown overlays with radial progress visuals for smooth readability during intense gameplay moments.
                </p>
              </div>
            </div>

            {/* Status Effects */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">3. Animated Feedback & Status Effects</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built animated markers for all major status effects (frozen, stunned, electrocuted, burning) to appear near the player's character with unique VFX, sound cues, and stackable states.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A vertical status feed logs all effects for clarity, while real-time UI flashes give instant feedback on power hits, interrupts, or crowd control actions.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-0 text-center overflow-hidden">
                <img src="/ksm-effects.png" alt="Kitsumon Status Effects" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* Environmental Assets */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg p-0 text-center order-2 lg:order-1 overflow-hidden">
                <img src="/ksm-texture.png" alt="Kitsumon Texture & Environmental Assets" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-xl font-semibold text-foreground mb-4">4. Texture & Environmental Assets</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Created detailed texture maps for both stylized environments and battle arenas using a consistent color grading palette. From mystical jungle tiles to mechanical nexuses, all texture work was hand-crafted to reinforce the elemental theme.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every asset was optimized for real-time rendering while maintaining the hand-painted aesthetic that defines Kitsumon's visual identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-12">Design Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Playability Through Structure</h3>
              <p className="text-muted-foreground">Every UI decision was driven by gameplay feel and performance data. The layout adapts naturally to different screen sizes and inputs, with interaction zones optimized for quick reactions and minimal cursor travel.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Motion for Meaning</h3>
              <p className="text-muted-foreground">Animations reinforced player actions: cooldowns pulsed, ability slots shimmered when charged, and hits felt impactful through micro-motion. No motion was ornamental—it all served feedback and engagement.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Consistency is Confidence</h3>
              <p className="text-muted-foreground">Icon systems, font hierarchies, and interactive elements were built from a centralized design system—ensuring clarity from the first match to the hundredth. Every state was accounted for and rigorously tested.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Developer-Ready Exports</h3>
              <p className="text-muted-foreground">All components were exported with consistent padding, sizing, and tokens for direct integration into Unity. Animation states and VFX cues were documented for seamless implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Results & Impact</h2>
          
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-6">Key Achievements</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Fully designed HUD and UI system shipped across multiple game builds</li>
              <li>• 100+ in-game icons, textures, and feedback animations created and optimized</li>
              <li>• Helped reduce player onboarding friction through layout clarity and visual storytelling</li>
              <li>• Real-time usability testing led to 2x faster ability recognition in combat scenarios</li>
              <li>• Established a consistent visual identity and scalable UI system for the game's future expansions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Player Personas Targeted</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">MOBA Competitors</h3>
              <p className="text-muted-foreground">MOBA players seeking competitive depth with RPG-style abilities and upgrades</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Casual Collectors</h3>
              <p className="text-muted-foreground">Casual gamers interested in creature-collecting mechanics within PvP environments</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Esports Players</h3>
              <p className="text-muted-foreground">Esports players requiring clean, actionable HUDs for high-level competitive play</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Industry Stakeholders</h3>
              <p className="text-muted-foreground">Game developers and investors looking for standout IP with rich lore and polished UI/UX foundations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Interested in working together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how thoughtful design and strategic thinking can elevate your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/#contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">View All Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitsumonProject;