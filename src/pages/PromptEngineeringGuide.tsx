import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, BookOpen, Zap, Target, Brain, ArrowRight, Code, Users, AlertTriangle, CheckCircle, Download } from 'lucide-react';

const PromptEngineeringGuide = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const printGuide = () => {
    window.print();
  };

  // Temperature visualization component
  const TemperatureSlider = () => {
    const [temp, setTemp] = useState(0.7);
    
    return (
      <div className="space-y-4 p-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Temperature: {temp}</span>
          <Badge variant={temp < 0.3 ? "secondary" : temp < 0.7 ? "default" : "destructive"}>
            {temp < 0.3 ? "Focused" : temp < 0.7 ? "Balanced" : "Creative"}
          </Badge>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center p-2 rounded bg-blue-100">
            <div className="font-semibold">0.0 - 0.3</div>
            <div>Deterministic</div>
            <div className="text-muted-foreground">Facts, code, analysis</div>
          </div>
          <div className="text-center p-2 rounded bg-green-100">
            <div className="font-semibold">0.4 - 0.7</div>
            <div>Balanced</div>
            <div className="text-muted-foreground">General tasks</div>
          </div>
          <div className="text-center p-2 rounded bg-red-100">
            <div className="font-semibold">0.8 - 1.0</div>
            <div>Creative</div>
            <div className="text-muted-foreground">Stories, brainstorming</div>
          </div>
        </div>
      </div>
    );
  };

  // Prompt comparison component
  const PromptComparison = () => {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-red-200">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Hard Mode Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg text-sm">
              <div className="font-mono text-xs">
                "You are my prompt coach. Our shared mission is to craft a **Prompt Blueprint** that turns the assistant into a personal AI tutor for artificial-intelligence learning—one that (a) quizzes me methodically to diagnose my current level and (b) delivers progressively harder lessons..."
              </div>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive">Complex</Badge>
              <Badge variant="outline">10+ Questions Upfront</Badge>
              <Badge variant="outline">Complete Blueprint First</Badge>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-red-800">Best For:</div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Advanced users</li>
                <li>Complete customization</li>
                <li>System builders</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Easy Mode Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg text-sm">
              <div className="font-mono text-xs">
                "You are my Prompt Coach. Our shared mission is to run a personal AI-tutor program that (1) diagnoses my current level and (2) delivers progressively harder lessons—without overwhelming me..."
              </div>
            </div>
            <div className="space-y-2">
              <Badge variant="default">Simple</Badge>
              <Badge variant="outline">One Question at a Time</Badge>
              <Badge variant="outline">Immediate Teaching</Badge>
            </div>
            <div className="text-sm">
              <div className="font-semibold text-green-800">Best For:</div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Beginners</li>
                <li>Quick starts</li>
                <li>Learners</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Semantic space visualization
  const SemanticSpace = () => {
    const roles = [
      { name: "Expert", x: 80, y: 20, color: "bg-red-500", traits: ["Authoritative", "Technical", "Comprehensive"] },
      { name: "Coach", x: 20, y: 80, color: "bg-blue-500", traits: ["Supportive", "Progressive", "Patient"] },
      { name: "Assistant", x: 50, y: 50, color: "bg-green-500", traits: ["Helpful", "Balanced", "Responsive"] },
      { name: "Tutor", x: 30, y: 20, color: "bg-purple-500", traits: ["Educational", "Structured", "Adaptive"] }
    ];

    return (
      <div className="space-y-4">
        <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border p-4">
          <div className="absolute top-2 left-2 text-xs text-muted-foreground">Formal</div>
          <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">Conversational</div>
          <div className="absolute top-2 right-2 text-xs text-muted-foreground">Challenging</div>
          <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">Supportive</div>
          
          {roles.map((role) => (
            <div
              key={role.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: `${role.x}%`, top: `${role.y}%` }}
            >
              <div className={`w-3 h-3 ${role.color} rounded-full`}></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow-lg border text-xs whitespace-nowrap z-10">
                <div className="font-semibold">{role.name}</div>
                <div className="space-y-1">
                  {role.traits.map(trait => (
                    <div key={trait} className="text-muted-foreground">{trait}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Hover over the dots to see how different role words activate different behavioral patterns in semantic space.
        </div>
      </div>
    );
  };

  const sections = [
    {
      id: "fundamentals",
      title: "Core Fundamentals",
      icon: Brain,
      description: "Understanding how prompts actually work",
      subsections: [
        {
          title: "Semantic Space Navigation",
          content: (
            <div className="space-y-4">
              <p>Every word in your prompt places the conversation in a specific territory of the AI's "mental map." Roles don't improve accuracy—they activate behavioral patterns.</p>
              <SemanticSpace />
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-800">Key Insight:</div>
                <p className="text-blue-700">"You are my prompt coach" doesn't make the AI smarter about prompts—it activates coaching patterns: asking questions, showing patience, tracking progress.</p>
              </div>
            </div>
          )
        },
        {
          title: "Cognitive Load Theory",
          content: (
            <div className="space-y-4">
              <p>Humans can hold 7±2 simple items in working memory, but only 3-4 complex concepts. Great prompts respect these limits.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800 text-lg">Overload</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• 5+ questions at once</li>
                      <li>• 500+ word instructions</li>
                      <li>• 3+ new concepts</li>
                      <li>• 2+ abstraction layers</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800 text-lg">Optimal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• One question at a time</li>
                      <li>• 250-word responses</li>
                      <li>• Single practice problem</li>
                      <li>• Clear next steps</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-blue-800 text-lg">Advanced</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Batch operations</li>
                      <li>• System thinking</li>
                      <li>• Meta-operations</li>
                      <li>• Custom workflows</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "architecture",
      title: "Prompt Architecture",
      icon: Code,
      description: "Building prompts as systems, not commands",
      subsections: [
        {
          title: "The Four-Layer Framework",
          content: (
            <div className="space-y-4">
              <p>Every powerful prompt follows this structure:</p>
              <div className="space-y-4">
                {[
                  { layer: "PURPOSE", desc: "Goal + Mode + Effort level", color: "bg-blue-500" },
                  { layer: "INSTRUCTIONS", desc: "Behavior rules + Constraints", color: "bg-green-500" },
                  { layer: "REFERENCE", desc: "Context + Data + Examples", color: "bg-yellow-500" },
                  { layer: "OUTPUT", desc: "Format + Length + Style", color: "bg-purple-500" }
                ].map((item, i) => (
                  <div key={item.layer} className="flex items-center gap-4">
                    <div className={`w-8 h-8 ${item.color} text-white rounded-full flex items-center justify-center font-bold`}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{item.layer}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-amber-200 border">
                <div className="font-semibold text-amber-800">Why This Order Matters:</div>
                <p className="text-amber-700">Define the goal before the method. Specify behavior before providing resources. Clarify resources before demanding output.</p>
              </div>
            </div>
          )
        },
        {
          title: "Hard Mode vs Easy Mode",
          content: (
            <div className="space-y-4">
              <p>The same goal can be achieved through completely different user experiences:</p>
              <PromptComparison />
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-800">Design Philosophy:</div>
                <p className="text-blue-700">Hard mode optimizes for power and completeness. Easy mode optimizes for approachability and flow. Choose based on your users, not your preferences.</p>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "parameters",
      title: "Key Parameters",
      icon: Target,
      description: "Settings that shape AI behavior",
      subsections: [
        {
          title: "Temperature Control",
          content: (
            <div className="space-y-4">
              <p>Temperature controls the randomness of AI responses. Lower values give more focused, deterministic outputs.</p>
              <TemperatureSlider />
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <div className="font-semibold text-blue-800">Low (0.0-0.3)</div>
                  <div className="text-blue-700">Perfect for: Code generation, factual Q&A, data analysis, technical writing</div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-semibold text-green-800">Medium (0.4-0.7)</div>
                  <div className="text-green-700">Perfect for: General conversation, explanations, balanced creativity</div>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <div className="font-semibold text-red-800">High (0.8-1.0)</div>
                  <div className="text-red-700">Perfect for: Creative writing, brainstorming, artistic expression</div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Context Windows & Memory",
          content: (
            <div className="space-y-4">
              <p>Understanding how AI remembers and forgets information during conversations.</p>
              <div className="relative">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">Active Memory (recent messages)</span>
                  <div className="w-4 h-4 bg-yellow-500 rounded ml-4"></div>
                  <span className="text-sm">Compressed Memory</span>
                  <div className="w-4 h-4 bg-red-500 rounded ml-4"></div>
                  <span className="text-sm">Forgotten (too old)</span>
                </div>
                <div className="h-12 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-lg relative">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-xs font-semibold">
                    Recent
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs font-semibold">
                    Oldest
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="font-semibold text-amber-800">Memory Management Tips:</div>
                <ul className="text-amber-700 list-disc list-inside space-y-1">
                  <li>Put critical instructions at the beginning and end of prompts</li>
                  <li>Repeat important constraints periodically</li>
                  <li>Use summary checkpoints for long conversations</li>
                  <li>Reference specific earlier examples by position</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Techniques",
      icon: Zap,
      description: "Power user strategies and meta-prompting",
      subsections: [
        {
          title: "Meta-Prompting",
          content: (
            <div className="space-y-4">
              <p>Use prompts to build better prompts. Create systems that interview users and generate custom prompts for their specific needs.</p>
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">Meta-Prompt Example</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  <div className="bg-white p-3 rounded border">
                    You are my [DOMAIN] prompt architect. Our goal is to build a prompt that [SPECIFIC OUTCOME].
                    <br /><br />
                    Interview me about:
                    <br />1. My current situation with [DOMAIN]
                    <br />2. My specific challenges  
                    <br />3. My success criteria
                    <br />4. My constraints
                    <br /><br />
                    After gathering answers, output a prompt that creates a [SYSTEM TYPE] for my exact needs.
                  </div>
                </CardContent>
              </Card>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-semibold text-purple-800">Why Meta-Prompts Work:</div>
                <p className="text-purple-700">No generic prompt fits everyone. A developer learning AI needs different pacing than a marketer. Meta-prompts solve this by making customization intelligent.</p>
              </div>
            </div>
          )
        },
        {
          title: "Progressive Disclosure",
          content: (
            <div className="space-y-4">
              <p>Two approaches to managing complexity: Blueprint disclosure vs. Fog of war disclosure.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-blue-800">Blueprint Disclosure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Show the entire structure, then fill it in</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Users see the whole journey</li>
                      <li>• Can plan their commitment</li>
                      <li>• Better for experts</li>
                      <li>• Higher cognitive load</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800">Fog of War</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Reveal only what's immediately relevant</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Users discover by walking</li>
                      <li>• Lower barrier to entry</li>
                      <li>• Better for beginners</li>
                      <li>• Maintains engagement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        },
        {
          title: "Command Systems",
          content: (
            <div className="space-y-4">
              <p>Give users control without overwhelming them with options.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold mb-2">Pacing Commands</div>
                  <div className="space-y-1 font-mono text-sm">
                    <div>/skip - Move to next topic</div>
                    <div>/slower - Reduce pace</div>
                    <div>/faster - Increase pace</div>
                    <div>/deepdive - More detail</div>
                    <div>/summary - Brief overview</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2">Mode Commands</div>
                  <div className="space-y-1 font-mono text-sm">
                    <div>/mode action - Hands-on tasks</div>
                    <div>/mode reflection - Deep thinking</div>
                    <div>/mode agentic - Autonomous</div>
                    <div>/effort quick - Fast answers</div>
                    <div>/effort deep - Thorough analysis</div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-semibold text-green-800">Design Principles:</div>
                <ul className="text-green-700 list-disc list-inside space-y-1">
                  <li>Intuitive (the name explains the function)</li>
                  <li>Memorable (single word after slash)</li>
                  <li>Focused (does one thing well)</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "psychology",
      title: "Psychological Principles",
      icon: Users,
      description: "Understanding the human side of prompting",
      subsections: [
        {
          title: "The Overwhelm Threshold",
          content: (
            <div className="space-y-4">
              <p>Research shows most users hit overwhelm at predictable points:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800">Overwhelm Triggers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• <span className="font-semibold">5+ questions</span> shown simultaneously</li>
                      <li>• <span className="font-semibold">500+ words</span> of instruction</li>
                      <li>• <span className="font-semibold">3+ new concepts</span> without practice</li>
                      <li>• <span className="font-semibold">2+ layers</span> of abstraction</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800">Safe Zones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• <span className="font-semibold">1 question</span> at a time</li>
                      <li>• <span className="font-semibold">250 words</span> maximum</li>
                      <li>• <span className="font-semibold">1 concept</span> + practice</li>
                      <li>• <span className="font-semibold">Direct</span> instructions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-800">Strategic Threshold Breaking:</div>
                <p className="text-blue-700">Hard mode deliberately exceeds these thresholds because its users self-select for complexity tolerance. Know your audience.</p>
              </div>
            </div>
          )
        },
        {
          title: "Default Psychology",
          content: (
            <div className="space-y-4">
              <p>Smart defaults remove decision paralysis while preserving power user control.</p>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                <div className="text-green-600">✓ Good: MODE (default agentic) override with "/mode ..."</div>
                <div className="text-red-600">✗ Bad: What mode would you like? (agentic/reflection/action)</div>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded">
                  <div className="font-semibold text-green-800">Pre-filled Defaults</div>
                  <div className="text-green-700">New users can start immediately without understanding every option</div>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="font-semibold text-blue-800">Override Commands</div>
                  <div className="text-blue-700">Power users can customize without complexity for beginners</div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <div className="font-semibold text-purple-800">Progressive Discovery</div>
                  <div className="text-purple-700">Users learn about options as they become relevant</div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: "practical",
      title: "Practical Applications",
      icon: CheckCircle,
      description: "Ready-to-use templates and examples",
      subsections: [
        {
          title: "Common Patterns",
          content: (
            <div className="space-y-4">
              <p>Proven patterns you can adapt for your needs:</p>
              <Tabs defaultValue="learning" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="learning">Learning</TabsTrigger>
                  <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  <TabsTrigger value="creation">Creation</TabsTrigger>
                </TabsList>
                <TabsContent value="learning" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Tutor Pattern</CardTitle>
                    </CardHeader>
                    <CardContent className="font-mono text-sm bg-gray-50 p-3 rounded">
                      You are my [SUBJECT] tutor. Our process:
                      <br />1. Assess my current level with one question
                      <br />2. Teach one concept (≤250 words)
                      <br />3. Give me practice
                      <br />4. Move to next level only if I score ≥80%
                      <br /><br />
                      Commands: /skip, /slower, /faster, /deepdive
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="analysis" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Deep Analysis Pattern</CardTitle>
                    </CardHeader>
                    <CardContent className="font-mono text-sm bg-gray-50 p-3 rounded">
                      You are my [DOMAIN] analyst. For each topic I give you:
                      <br />1. Ask 3 clarifying questions
                      <br />2. Provide structured analysis
                      <br />3. Identify key insights
                      <br />4. Recommend next steps
                      <br /><br />
                      Format: Problem → Analysis → Insights → Actions
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="creation" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Iterative Creation Pattern</CardTitle>
                    </CardHeader>
                    <CardContent className="font-mono text-sm bg-gray-50 p-3 rounded">
                      You are my [CREATION] partner. Our workflow:
                      <br />1. Interview me about requirements
                      <br />2. Create initial version
                      <br />3. Get specific feedback
                      <br />4. Iterate until satisfied
                      <br /><br />
                      Always ask "What specifically should I adjust?" after each version.
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )
        },
        {
          title: "Transformation Exercises",
          content: (
            <div className="space-y-4">
              <p>Practice converting weak prompts into powerful ones:</p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-800">Before: Batch → Single Question</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 p-3 rounded mb-3 text-sm">
                      <div className="font-semibold">❌ Weak:</div>
                      Tell me about: 1) Your experience level 2) Your goals 3) Your time commitment 4) Your learning style
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm">
                      <div className="font-semibold">✅ Strong:</div>
                      I'll learn about you through a few quick questions.
                      <br />First: What's your experience level with [topic]? (Beginner/Intermediate/Advanced)
                      <br />[After response] Got it. Next: What specific outcome do you want?
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-800">Add Semantic Triggers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 p-3 rounded mb-3 text-sm">
                      <div className="font-semibold">❌ Generic:</div>
                      Create a learning plan for me
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm">
                      <div className="font-semibold">✅ Enhanced:</div>
                      • "Create a 12-week bootcamp curriculum" (triggers intensive learning)
                      <br />• "Design an executive briefing series" (triggers concise, high-level)
                      <br />• "Build a workshop-based learning path" (triggers hands-on practice)
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:text-sm { font-size: 0.875rem !important; }
          .print\\:break-inside-avoid { break-inside: avoid !important; }
          .print\\:text-black { color: black !important; }
          body { -webkit-print-color-adjust: exact; }
          .collapsible-content { display: block !important; height: auto !important; }
          .chevron-icon { display: none !important; }
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-6 h-6" />
            <span className="font-bold text-lg">Prompt Engineering Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Master the Art of AI Communication
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Learn to build prompts as conversation architectures, not commands. Transform AI from a tool into a powerful collaborator through strategic prompt design.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              Cognitive Load Theory
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Semantic Space Navigation
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Meta-Prompting
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Progressive Disclosure
            </Badge>
          </div>

          <Button 
            onClick={printGuide}
            className="no-print bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download as PDF
          </Button>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12 print:break-inside-avoid">
          <CardHeader>
            <CardTitle className="text-2xl">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <div key={section.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold flex items-center gap-2">
                      <section.icon className="w-4 h-4" />
                      {section.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{section.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <section key={section.id} className="print:break-inside-avoid">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {section.subsections.map((subsection, subsectionIndex) => (
                  <Collapsible
                    key={`${section.id}-${subsectionIndex}`}
                    open={openSections[`${section.id}-${subsectionIndex}`] ?? false}
                    onOpenChange={() => toggleSection(`${section.id}-${subsectionIndex}`)}
                  >
                    <Card className="print:break-inside-avoid">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                          <CardTitle className="flex items-center justify-between">
                            <span className="flex items-center gap-3">
                              <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                                {sectionIndex + 1}.{subsectionIndex + 1}
                              </span>
                              {subsection.title}
                            </span>
                            <div className="chevron-icon no-print">
                              {openSections[`${section.id}-${subsectionIndex}`] ? (
                                <ChevronDown className="w-5 h-5" />
                              ) : (
                                <ChevronRight className="w-5 h-5" />
                              )}
                            </div>
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="collapsible-content">
                        <CardContent className="pt-0">
                          {subsection.content}
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Reference */}
        <Card className="mt-12 print:break-inside-avoid">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Reference Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-800">✅ Do This</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Define role with behavioral specificity</li>
                  <li>• Use single-question flows for beginners</li>
                  <li>• Add smart defaults with override commands</li>
                  <li>• Respect cognitive load limits (250 words)</li>
                  <li>• Include progress tracking and checkpoints</li>
                  <li>• Test with your actual users</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-800">❌ Avoid This</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Generic expert roles without context</li>
                  <li>• Showing 5+ questions simultaneously</li>
                  <li>• Vague memory instructions</li>
                  <li>• Over-explaining obvious concepts</li>
                  <li>• Mixing inconsistent formats</li>
                  <li>• Adding features users didn't request</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-muted-foreground">
            Remember: The best prompt is the one you actually use. Start simple, iterate based on real usage, and always optimize for your users' experience over your own preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptEngineeringGuide;