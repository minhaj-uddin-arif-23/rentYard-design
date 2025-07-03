"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function Content() {
  return (
      <div>
        {/* section - 1 */}
        <section>

        </section>
        {/* section - 2 */}
        <section>

        </section>
           <div className="flex flex-col gap-6">
   
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
    
    </div>
      </div>
  )
}
