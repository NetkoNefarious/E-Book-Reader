import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function Upload(req: NextApiRequest, res: NextApiResponse): any {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm({
      uploadDir: "./uploads",
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      res.status(200).json({ err, fields, files });
    });
  } else {
    res.status(405).send("405 Method not allowed");
  }
}
