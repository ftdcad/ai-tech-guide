import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Download, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">AI Learning Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master AI concepts and perfect your prompting skills with comprehensive visual guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>AI Terminology Guide</CardTitle>
                  <CardDescription>Visual explanations of AI concepts</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive visual guide covering neural networks, transformers, training methods, and advanced AI techniques.
              </p>
              <Button asChild className="w-full group-hover:bg-primary/90">
                <Link to="/ai-terminology-guide">
                  Explore AI Terms
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle>Prompt Engineering Guide</CardTitle>
                  <CardDescription>Master AI communication</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn to build prompts as conversation architectures. Transform AI from a tool into a powerful collaborator.
              </p>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link to="/prompt-engineering-guide">
                  Master Prompting
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-secondary" />
                <div>
                  <CardTitle>Print Ready</CardTitle>
                  <CardDescription>PDF-optimized formatting</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Professional layouts perfect for printing or sharing as reference documents.
              </p>
              <Button variant="secondary" asChild className="w-full">
                <Link to="/ai-terminology-guide">
                  <Download className="mr-2 h-4 w-4" />
                  Print Guides
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Interactive Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Visual diagrams & comparisons
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Interactive components
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Expandable sections
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Real-world examples
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Learning Path</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Start with terminology
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Master prompting skills
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Apply in practice
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Build AI systems
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
