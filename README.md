# entitygen

This is a first attempt at producing an RPG entity generator for DMs that's customizable, so that a DM can build an NPC or an encounter table and also roll it in the same tool. The entity generator is designed for easy generation of nested entities as well, so that you could build an 'atomic' entity such as a random name generator and also build larger entities composed of entities themselves, such as an NPC generator, a city generator (including NPCs, factions, etc.), or even a whole world generator.

Given that I know how to create JS objects and JSON output, the project needs little in the way of an interface in the beginning. The first contribution is simply a format for creating procedural entities useful to a DM, represented as JS objects (the input) and/or JSON (the output).

## Warning Concerning Logging

It is recommended that this tool be used in tandem with some kind of logging/word processing software such as OneNote, Notion.so, or Microsoft Word. This browser-based tool will not store entities, at least not in its initial version, though the ability to share entities and export/import them from a larger library is also a valuable goal of this project.

## Entity Generator & Outcome Format

## Entity Generator Interface

Two views are of primary importance, the Workbook (Generators) view, and the Notebook (Outcomes) view.

The generator view will have the outcomes view on its side given a large enough display, and vice-versa for the outcomes view.

