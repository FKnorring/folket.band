import React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TbMailFilled } from "react-icons/tb";

function ContactForm() {
  return (
    <form className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold text-center">Kontakta oss!</h2>
      <Textarea
        required
        placeholder="Hej jag är ... och vill boka er för ..."
        className="bg-black bg-opacity-50 h-48"
      />
      <div className="flex gap-2">
        <Input
          required
          className="bg-black bg-opacity-50"
          type="email"
          placeholder="Email"
        />
        <Button disabled className="pe-5 select-none">
          <TbMailFilled className="mr-2 h-4 w-4" />
          Skicka
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Eller nå oss på{" "}
        <a href="mailto:folket@band.se">
          <span className="font-semibold underline">folket@band.se</span>
        </a>
      </p>
    </form>
  );
}

export default ContactForm;
