import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import FeedbackDialog from "@/components/FeedbackDialog";

export default function SectionFeedbackButton() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-12">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFeedbackOpen(true)}
          className="text-muted-foreground hover:text-foreground gap-2"
          data-testid="button-section-feedback"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Share feedback on this section</span>
        </Button>
      </div>
      <FeedbackDialog open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </>
  );
}
