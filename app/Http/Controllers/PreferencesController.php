<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PreferencesController extends Controller
{
    public function switchTheme(Request $request)
    {
        $theme = $request->input('theme', 'light');
        
        session(['theme' => $theme]);

        return response()->json([
            'success' => true,
            'message' => __('Preferência de tema atualizada'),
            'data' => [
                'theme' => $theme,
            ],
        ]);
    }

    public function switchLanguage(Request $request)
    {
        $locale = $request->input('locale', 'pt');

        app()->setLocale($locale);
        session(['locale' => $locale]);

        return response()->json([
            'success' => true,
            'message' => __('Idioma atualizado'),
            'data' => [
                'locale' => $locale,
            ],
        ]);
    }
}
