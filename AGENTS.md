<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep TanStack Start routing and isolate the imported Advance Gardens presentation in `src/components/advance`; this preserves original page controls without replacing the platform framework.
- Keep the imported page's in-page links and image props supported by small local adapters; this preserves original section markup and interactions.
- Derive header theme from the hero's bottom and navigation height; this keeps the transition correct across screen sizes and content-height changes.
