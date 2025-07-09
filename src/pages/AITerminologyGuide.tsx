import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Cpu, 
  Settings, 
  Zap, 
  Shield, 
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Download
} from "lucide-react";

const AITerminologyGuide = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['fundamentals']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const printGuide = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6 print:py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground print:text-2xl">
                AI Terminology Guide
              </h1>
              <p className="text-muted-foreground mt-2 print:text-sm">
                Comprehensive reference for AI concepts with visual explanations
              </p>
            </div>
            <Button onClick={printGuide} className="print:hidden">
              <Download className="mr-2 h-4 w-4" />
              Print PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 print:px-4 print:py-6">
        {/* Table of Contents */}
        <Card className="mb-8 print:mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 print:grid-cols-1 print:gap-2">
              <div className="space-y-2">
                <a href="#fundamentals" className="block text-primary hover:underline print:text-sm">
                  1. Fundamentals
                </a>
                <a href="#architecture" className="block text-primary hover:underline print:text-sm">
                  2. Model Architecture
                </a>
                <a href="#training" className="block text-primary hover:underline print:text-sm">
                  3. Training Methods
                </a>
              </div>
              <div className="space-y-2">
                <a href="#optimization" className="block text-primary hover:underline print:text-sm">
                  4. Optimization Techniques
                </a>
                <a href="#parameters" className="block text-primary hover:underline print:text-sm">
                  5. Parameters & Settings
                </a>
                <a href="#advanced" className="block text-primary hover:underline print:text-sm">
                  6. Advanced Concepts
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Fundamentals */}
        <section id="fundamentals" className="mb-12 print:mb-8 print:break-inside-avoid">
          <div className="flex items-center gap-2 mb-6 print:mb-4">
            <button 
              onClick={() => toggleSection('fundamentals')}
              className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors print:pointer-events-none"
            >
              {expandedSections.includes('fundamentals') ? 
                <ChevronDown className="h-6 w-6 print:hidden" /> : 
                <ChevronRight className="h-6 w-6 print:hidden" />
              }
              1. Fundamentals
            </button>
          </div>

          {(expandedSections.includes('fundamentals') || typeof window !== 'undefined' && window.matchMedia('print').matches) && (
            <div className="space-y-8 print:space-y-6">
              {/* LLM Definition */}
              <Card>
                <CardHeader>
                  <CardTitle>Large Language Model (LLM)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        A neural network trained on vast amounts of text data to understand and generate human-like language.
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">Key Characteristics:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm print:text-xs">
                          <li>Billions of parameters</li>
                          <li>Transformer architecture</li>
                          <li>Emergent capabilities</li>
                          <li>General-purpose reasoning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border-2 border-border flex items-center justify-center print:w-32 print:h-20">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary print:text-xl">LLM</div>
                          <div className="text-xs text-muted-foreground">Neural Network</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tokens */}
              <Card>
                <CardHeader>
                  <CardTitle>Tokens</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        The fundamental units of text that AI models process. Words, parts of words, or characters broken down for computation.
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">Examples:</h4>
                        <div className="space-y-2 text-sm print:text-xs">
                          <div>"Hello world" → ["Hello", " world"]</div>
                          <div>"OpenAI" → ["Open", "AI"]</div>
                          <div>"understanding" → ["under", "standing"]</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          <div className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm print:px-2 print:text-xs">Hello</div>
                          <div className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm print:px-2 print:text-xs">world</div>
                        </div>
                        <div className="text-center text-xs text-muted-foreground">Tokenization Process</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Context Window */}
              <Card>
                <CardHeader>
                  <CardTitle>Context Window</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        The maximum number of tokens an AI model can consider at once. Determines how much conversation history or document content the model can "remember."
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">Common Sizes:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm print:text-xs">
                          <li>GPT-3.5: 4,096 tokens</li>
                          <li>GPT-4: 8,192-128,000 tokens</li>
                          <li>Claude: 200,000+ tokens</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-24 border-2 border-border rounded-lg relative overflow-hidden print:w-32 print:h-16">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-medium print:text-xs">4K-200K+ Tokens</span>
                        </div>
                        <div className="absolute bottom-1 left-1 text-xs text-muted-foreground print:text-[10px]">Context Window</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        <Separator className="my-8" />

        {/* Section 2: Model Architecture */}
        <section id="architecture" className="mb-12 print:mb-8 print:break-inside-avoid">
          <div className="flex items-center gap-2 mb-6 print:mb-4">
            <button 
              onClick={() => toggleSection('architecture')}
              className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors print:pointer-events-none"
            >
              {expandedSections.includes('architecture') ? 
                <ChevronDown className="h-6 w-6 print:hidden" /> : 
                <ChevronRight className="h-6 w-6 print:hidden" />
              }
              <Cpu className="h-6 w-6" />
              2. Model Architecture
            </button>
          </div>

          {(expandedSections.includes('architecture') || typeof window !== 'undefined' && window.matchMedia('print').matches) && (
            <div className="space-y-8 print:space-y-6">
              {/* Transformer Architecture */}
              <Card>
                <CardHeader>
                  <CardTitle>Transformer Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        The foundational neural network design that revolutionized AI. Uses attention mechanisms to process sequences efficiently.
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">Key Components:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm print:text-xs">
                          <li>Multi-head attention</li>
                          <li>Feed-forward networks</li>
                          <li>Layer normalization</li>
                          <li>Positional encoding</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="space-y-3 print:space-y-2">
                        <div className="w-32 h-8 bg-primary/20 border border-primary rounded flex items-center justify-center text-sm print:w-24 print:h-6 print:text-xs">Output</div>
                        <div className="w-32 h-8 bg-secondary/20 border border-secondary rounded flex items-center justify-center text-sm print:w-24 print:h-6 print:text-xs">Attention</div>
                        <div className="w-32 h-8 bg-accent/20 border border-accent rounded flex items-center justify-center text-sm print:w-24 print:h-6 print:text-xs">Feed Forward</div>
                        <div className="w-32 h-8 bg-muted border border-border rounded flex items-center justify-center text-sm print:w-24 print:h-6 print:text-xs">Input</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Attention Mechanism */}
              <Card>
                <CardHeader>
                  <CardTitle>Attention Mechanism</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        Allows the model to focus on relevant parts of the input when processing each token. The key innovation that makes Transformers effective.
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">How it works:</h4>
                        <p className="text-sm print:text-xs">
                          Each word "attends" to other words in the sequence, creating dynamic relationships based on context and meaning.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-32 print:w-32 print:h-20">
                        <div className="absolute top-0 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs print:w-6 print:h-6">A</div>
                        <div className="absolute top-0 right-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-xs print:w-6 print:h-6">B</div>
                        <div className="absolute bottom-0 left-8 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs print:w-6 print:h-6">C</div>
                        <div className="absolute bottom-0 right-8 w-8 h-8 bg-muted-foreground rounded-full flex items-center justify-center text-white text-xs print:w-6 print:h-6">D</div>
                        
                        {/* Attention lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <line x1="20" y1="16" x2="180" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="text-primary"/>
                          <line x1="180" y1="16" x2="40" y2="112" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="text-secondary"/>
                          <line x1="40" y1="112" x2="160" y2="112" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="text-accent"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        <Separator className="my-8" />

        {/* Section 3: Training Methods */}
        <section id="training" className="mb-12 print:mb-8 print:break-inside-avoid">
          <div className="flex items-center gap-2 mb-6 print:mb-4">
            <button 
              onClick={() => toggleSection('training')}
              className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors print:pointer-events-none"
            >
              {expandedSections.includes('training') ? 
                <ChevronDown className="h-6 w-6 print:hidden" /> : 
                <ChevronRight className="h-6 w-6 print:hidden" />
              }
              <TrendingUp className="h-6 w-6" />
              3. Training Methods
            </button>
          </div>

          {(expandedSections.includes('training') || typeof window !== 'undefined' && window.matchMedia('print').matches) && (
            <div className="space-y-8 print:space-y-6">
              {/* Fine-tuning vs RAG Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle>Fine-tuning vs RAG (Retrieval-Augmented Generation)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border border-border p-3 bg-muted text-left print:p-2 print:text-sm">Aspect</th>
                          <th className="border border-border p-3 bg-primary/10 text-left print:p-2 print:text-sm">Fine-tuning</th>
                          <th className="border border-border p-3 bg-secondary/10 text-left print:p-2 print:text-sm">RAG</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 font-medium print:p-2 print:text-sm">Purpose</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Adapt model behavior</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Access external knowledge</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-medium print:p-2 print:text-sm">Cost</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">High (training required)</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Lower (no training)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-medium print:p-2 print:text-sm">Updates</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Requires retraining</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Update knowledge base</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-medium print:p-2 print:text-sm">Best for</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Style, format, behavior</td>
                          <td className="border border-border p-3 print:p-2 print:text-sm">Current information, facts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* LoRA */}
              <Card>
                <CardHeader>
                  <CardTitle>LoRA (Low-Rank Adaptation)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        Efficient fine-tuning method that adds small adapter layers instead of modifying all model parameters.
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">Benefits:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm print:text-xs">
                          <li>99% fewer trainable parameters</li>
                          <li>Faster training and inference</li>
                          <li>Multiple adapters per model</li>
                          <li>Preserves original model knowledge</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="space-y-4 print:space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-8 bg-muted border border-border rounded flex items-center justify-center text-xs print:w-12 print:h-6">Original</div>
                          <span className="text-xl print:text-lg">+</span>
                          <div className="w-12 h-6 bg-primary rounded flex items-center justify-center text-white text-xs print:w-8 print:h-4">LoRA</div>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-8 bg-gradient-to-r from-muted to-primary rounded border border-border flex items-center justify-center text-xs print:w-16 print:h-6">
                            Adapted
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        <Separator className="my-8" />

        {/* Section 4: Parameters & Settings */}
        <section id="parameters" className="mb-12 print:mb-8 print:break-inside-avoid">
          <div className="flex items-center gap-2 mb-6 print:mb-4">
            <button 
              onClick={() => toggleSection('parameters')}
              className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors print:pointer-events-none"
            >
              {expandedSections.includes('parameters') ? 
                <ChevronDown className="h-6 w-6 print:hidden" /> : 
                <ChevronRight className="h-6 w-6 print:hidden" />
              }
              <Settings className="h-6 w-6" />
              4. Parameters & Settings
            </button>
          </div>

          {(expandedSections.includes('parameters') || typeof window !== 'undefined' && window.matchMedia('print').matches) && (
            <div className="space-y-8 print:space-y-6">
              {/* Temperature */}
              <Card>
                <CardHeader>
                  <CardTitle>Temperature</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        Controls randomness in model outputs. Lower values produce more deterministic responses, higher values increase creativity.
                      </p>
                      <div className="bg-muted p-4 rounded-lg print:p-3">
                        <h4 className="font-semibold mb-2 print:text-sm">Range: 0.0 - 2.0</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm print:text-xs">
                          <li>0.0: Deterministic, factual</li>
                          <li>0.7: Balanced creativity</li>
                          <li>1.5+: Highly creative, unpredictable</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative w-32 h-32 print:w-24 print:h-24">
                        <div className="absolute inset-0 rounded-full border-4 border-border"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary transform rotate-45"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold text-primary print:text-lg">0.7</div>
                            <div className="text-xs text-muted-foreground">Temperature</div>
                          </div>
                        </div>
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-muted-foreground print:text-[10px]">
                          <span>0.0</span>
                          <span>2.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top-K and Top-P */}
              <Card>
                <CardHeader>
                  <CardTitle>Top-K & Top-P (Nucleus Sampling)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-4">
                    <div>
                      <p className="text-foreground mb-4 print:text-sm">
                        Advanced sampling methods that control which tokens the model considers when generating responses.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-lg print:p-2">
                          <h4 className="font-semibold mb-1 print:text-sm">Top-K</h4>
                          <p className="text-sm print:text-xs">Considers only the K most likely next tokens</p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg print:p-2">
                          <h4 className="font-semibold mb-1 print:text-sm">Top-P</h4>
                          <p className="text-sm print:text-xs">Considers tokens until cumulative probability reaches P</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="space-y-4 print:space-y-3">
                        <div className="text-center">
                          <div className="text-sm font-medium mb-2 print:text-xs">Top-K = 5</div>
                          <div className="space-y-1">
                            {[40, 30, 15, 10, 5].map((width, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div 
                                  className="h-4 bg-primary rounded print:h-3" 
                                  style={{width: `${width}px`}}
                                ></div>
                                <span className="text-xs text-muted-foreground">Token {i+1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* Quick Reference Glossary */}
        <Card className="mt-12 print:mt-8">
          <CardHeader>
            <CardTitle>Quick Reference Glossary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 print:grid-cols-2 print:gap-3">
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Embedding</h4>
                  <p className="text-xs text-muted-foreground">Vector representation of text</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Hallucination</h4>
                  <p className="text-xs text-muted-foreground">Generating false information</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Prompt Engineering</h4>
                  <p className="text-xs text-muted-foreground">Crafting effective AI inputs</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Zero-shot</h4>
                  <p className="text-xs text-muted-foreground">Task without examples</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Few-shot</h4>
                  <p className="text-xs text-muted-foreground">Task with few examples</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Chain of Thought</h4>
                  <p className="text-xs text-muted-foreground">Step-by-step reasoning</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">RLHF</h4>
                  <p className="text-xs text-muted-foreground">Reinforcement Learning from Human Feedback</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Multimodal</h4>
                  <p className="text-xs text-muted-foreground">Text, image, audio processing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm print:text-xs">Agent</h4>
                  <p className="text-xs text-muted-foreground">AI that can take actions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { font-size: 12px; }
          .print\\:hidden { display: none !important; }
          .print\\:text-xs { font-size: 10px; }
          .print\\:text-sm { font-size: 11px; }
          .print\\:text-lg { font-size: 13px; }
          .print\\:text-xl { font-size: 14px; }
          .print\\:text-2xl { font-size: 16px; }
          .print\\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .print\\:py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
          .print\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
          .print\\:mb-4 { margin-bottom: 1rem; }
          .print\\:mb-6 { margin-bottom: 1.5rem; }
          .print\\:mb-8 { margin-bottom: 2rem; }
          .print\\:mt-8 { margin-top: 2rem; }
          .print\\:space-y-2 > * + * { margin-top: 0.5rem; }
          .print\\:space-y-3 > * + * { margin-top: 0.75rem; }
          .print\\:space-y-6 > * + * { margin-top: 1.5rem; }
          .print\\:gap-2 { gap: 0.5rem; }
          .print\\:gap-3 { gap: 0.75rem; }
          .print\\:gap-4 { gap: 1rem; }
          .print\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .print\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .print\\:p-2 { padding: 0.5rem; }
          .print\\:p-3 { padding: 0.75rem; }
          .print\\:w-8 { width: 2rem; }
          .print\\:w-12 { width: 3rem; }
          .print\\:w-16 { width: 4rem; }
          .print\\:w-24 { width: 6rem; }
          .print\\:w-32 { width: 8rem; }
          .print\\:h-3 { height: 0.75rem; }
          .print\\:h-4 { height: 1rem; }
          .print\\:h-6 { height: 1.5rem; }
          .print\\:h-16 { height: 4rem; }
          .print\\:h-20 { height: 5rem; }
          .print\\:h-24 { height: 6rem; }
          .print\\:break-inside-avoid { break-inside: avoid; }
          .print\\:pointer-events-none { pointer-events: none; }
          .print\\:text-\\[10px\\] { font-size: 10px; }
          
          @page {
            margin: 0.75in;
            size: letter;
          }
          
          h1, h2, h3 {
            break-after: avoid;
          }
          
          .card {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default AITerminologyGuide;